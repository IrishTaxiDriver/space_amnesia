Game.Map = function(tiles) {
    this._tiles = tiles;
    // Cache dimensions
    this._depth = tiles.length
    this._width = tiles[0].length;
    this._height = tiles[0][0].length;
    this._habitat = "none";
    // Setup the field of visions
    this._fov = [];
    this.setupFov();
    // Create a table which will hold the entities
    this._entities = {};
    // Create a table which will hold the items
    this._items = {};
    // Create the engine and scheduler
    this._scheduler = new ROT.Scheduler.Speed();
    this._engine = new ROT.Engine(this._scheduler);
    // Setup the explored array
    this._explored = new Array(this._depth);
    this._setupExploredArray();
};

Game.Map.prototype._setupExploredArray = function() {
    for (var z = 0; z < this._depth; z++) {
        this._explored[z] = new Array(this._width);
        for (var x = 0; x < this._width; x++) {
            this._explored[z][x] = new Array(this._height);
            for (var y = 0; y < this._height; y++) {
                this._explored[z][x][y] = false;
            }
        }
    }
};

// Standard getters
Game.Map.prototype.getDepth = function() {
    return this._depth;
};
Game.Map.prototype.getWidth = function() {
    return this._width;
};
Game.Map.prototype.getHeight = function() {
    return this._height;
};

// Gets the tile for a given coordinate set
Game.Map.prototype.getTile = function(x, y, z) {
    // Make sure we are inside the bounds. If we aren't, return
    // null tile.
    if (x < 0 || x >= this._width || y < 0 || y >= this._height ||
        z < 0 || z >= this._depth) {
        return Game.Tile.nullTile;
    } else {
        return this._tiles[z][x][y] || Game.Tile.nullTile;
    }
};

Game.Map.prototype.dig = function(x, y, z) {
    // If the tile is diggable, update it to a floor
    if (this.getTile(x, y, z).isDiggable()) {
        this._tiles[z][x][y] = Game.Tile.undergroundFloorTile;
    }
};

Game.Map.prototype.isEmptyFloor = function(x, y, z) {
    // Check if the tile is floor and also has no entity
    return this.getTile(x, y, z) == Game.Tile.undergroundFloorTile &&
           !this.getEntityAt(x, y, z);
};

Game.Map.prototype.setExplored = function(x, y, z, state) {
    // Only update if the tile is within bounds
    if (this.getTile(x, y, z) !== Game.Tile.nullTile) {
        this._explored[z][x][y] = state;
    }
};

Game.Map.prototype.isExplored = function(x, y, z) {
    // Only return the value if within bounds
    if (this.getTile(x, y, z) !== Game.Tile.nullTile) {
        return this._explored[z][x][y];
    } else {
        return false;
    }
};

Game.Map.prototype.setupFov = function() {
    // Keep this in 'map' variable so that we don't lose it.
    var map = this;
    // Iterate through each depth level, setting up the field of vision
    for (var z = 0; z < this._depth; z++) {
        // We have to put the following code in it's own scope to prevent the
        // depth variable from being hoisted out of the loop.
        (function() {
            // For each depth, we need to create a callback which figures out
            // if light can pass through a given tile.
            var depth = z;
            map._fov.push(
                new ROT.FOV.DiscreteShadowcasting(function(x, y) {
                    return !map.getTile(x, y, depth).isBlockingLight();
                }, {topology: 4}));
        })();
    }
};

Game.Map.prototype.getFov = function(depth) {
    return this._fov[depth];
};

Game.Map.prototype.getEngine = function() {
    return this._engine;
};
Game.Map.prototype.getEntities = function() {
    return this._entities;
};
Game.Map.prototype.getEntityAt = function(x, y, z){
    // Get the entity based on position key 
    return this._entities[x + ',' + y + ',' + z];
};
Game.Map.prototype.getEntitiesWithinRadius = function(centerX, centerY,
                                                      centerZ, radius) {
    results = [];
    // Determine our bounds
    var leftX = centerX - radius;
    var rightX = centerX + radius;
    var topY = centerY - radius;
    var bottomY = centerY + radius;
    // Iterate through our entities, adding any which are within the bounds
    for (var key in this._entities) {
        var entity = this._entities[key];
        if (entity.getX() >= leftX && entity.getX() <= rightX && 
            entity.getY() >= topY && entity.getY() <= bottomY &&
            entity.getZ() == centerZ) {
            results.push(entity);
        }
    }
    return results;
};

Game.Map.prototype.getRandomFloorPosition = function(z) {
    // Randomly generate a tile which is a floor
    var x, y;
    do {
        x = Math.floor(Math.random() * this._width);
        y = Math.floor(Math.random() * this._height);
    } while(!this.isEmptyFloor(x, y, z));
    return {x: x, y: y, z: z};
};

Game.Map.prototype.addEntityAtRandomPosition = function(entity, z) {
    var position = this.getRandomFloorPosition(z);
    entity.setX(position.x);
    entity.setY(position.y);
    entity.setZ(position.z);
    this.addEntity(entity);
};

Game.Map.prototype.addEntity = function(entity) {
    // Update the entity's map
    entity.setMap(this);
    // Update the map with the entity's position
    this.updateEntityPosition(entity);
    // Check if this entity is an actor, and if so add
    // them to the scheduler
    if (entity.hasMixin('Actor')) {
       this._scheduler.add(entity, true);
    } 
    // If the entity is the player, set the player.
    if (entity.hasMixin(Game.EntityMixins.PlayerActor)) {
        Game._player = entity;
    }
};

Game.Map.prototype.removeEntity = function(entity) {
    // Remove the entity from the map
    var key = entity.getX() + ',' + entity.getY() + ',' + entity.getZ();
    if (this._entities[key] == entity) {
        delete this._entities[key];
    }
    // If the entity is an actor, remove them from the scheduler
    if (entity.hasMixin('Actor')) {
        this._scheduler.remove(entity);
    }
    // If the entity is the player, update the player field.
    if (entity.hasMixin(Game.EntityMixins.PlayerActor)) {
        Game._player = undefined;
    }
};


Game.Map.prototype.updateEntityPosition = function(
    entity, oldX, oldY, oldZ) {
    // Delete the old key if it is the same entity
    // and we have old positions.
    if (typeof oldX === 'number') {
        var oldKey = oldX + ',' + oldY + ',' + oldZ;
        if (this._entities[oldKey] == entity) {
            delete this._entities[oldKey];
        }
    }
    // Make sure the entity's position is within bounds
    if (entity.getX() < 0 || entity.getX() >= this._width ||
        entity.getY() < 0 || entity.getY() >= this._height ||
        entity.getZ() < 0 || entity.getZ() >= this._depth) {
        throw new Error(loc.MapEntityErrorOOB);
    }
    // Sanity check to make sure there is no entity at the new position.
    var key = entity.getX() + ',' + entity.getY() + ',' + entity.getZ();
    if (this._entities[key]) {
        throw new Error(loc.MapEntityErrorOccupied);
    }
    // Add the entity to the table of entities
    this._entities[key] = entity;
};

Game.Map.prototype.getItemsAt = function(x, y, z) {
    return this._items[x + ',' + y + ',' + z];
};

Game.Map.prototype.setItemsAt = function(x, y, z, items) {
    // If our items array is empty, then delete the key from the table.
    var key = x + ',' + y + ',' + z;
    if (items.length === 0) {
        if (this._items[key]) {
            delete this._items[key];
        }
    } else {
        // Simply update the items at that key
        this._items[key] = items;
    }
};

Game.Map.prototype.addItem = function(x, y, z, item) {
    // If we already have items at that position, simply append the item to the 
    // list of items.
    var key = x + ',' + y + ',' + z;
    if (this._items[key]) {
        this._items[key].push(item);
    } else {
        this._items[key] = [item];
    }
};

Game.Map.prototype.removeItem = function(x, y, z, item) {
    var key = x + ',' + y + ',' + z;
    if (this._items[key]) {
        this._items[key].pop(item);
    } else {
        this._items[key] = null;
    }  
}

Game.Map.prototype.addItemAtRandomPosition = function(item, z) {
    var position = this.getRandomFloorPosition(z);
    this.addItem(position.x, position.y, position.z, item);
};

Game.Map.prototype.getPlayer = function() {
    return Game._player;
};

Game.Map.prototype.populateEntities = function(num, habitat) {
 for (var z = 0; z < this._depth; z++) {
        for (var i = 0; i < num; i++) {
            var entity = Game.EntityRepository.createRandomFromCriteria("habitat", habitat);
            // Add a random entity
            this.addEntityAtRandomPosition(entity, z);
            // Level up the entity based on the floor
            if (entity.hasMixin('ExperienceGainer')) {
                for (var level = 0; level < z; level++) {
                    entity.giveExperience(entity.getNextLevelExperience() -
                        entity.getExperience());
                }
            }
        }
    }
}

Game.Map.prototype.populateItems = function(num, habitat) {
    for (var z = 0; z < this._depth; z++) {
        for (var i = 0; i < num; i++) {
            var item = Game.ItemRepository.createRandomFromCriteria("habitat", habitat);
            // Add a random item for the habitat
            if (item.hasMixin('ItemCurrency')) {
                item.randomizeValue(100);
            }
            this.addItemAtRandomPosition(item, z);
        }
    }
}

Game.Map.prototype.addContainer = function() {
    for (var z = 0; z < this._depth; z++) {
        var container = Game.EntityRepository.createRandomFromCriteria("class", loc.EntityClassContainer);
        container.populateContainerWithRandomCount(5);
        this.addEntityAtRandomPosition(container, z);
    }
}