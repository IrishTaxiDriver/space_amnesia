Game.Tile = function(properties) {
    properties = properties || {};
    // Call the Glyph constructor with our properties
    Game.Glyph.call(this, properties);
    // Set up the properties. We use false by default.
    this._walkable = properties['walkable'] || false;
    this._diggable = properties['diggable'] || false;
    this._blocksLight = (properties['blocksLight'] !== undefined) ?
        properties['blocksLight'] : true;
    this._description = properties['description'] || '';
};
// Make tiles inherit all the functionality from glyphs
Game.Tile.extend(Game.Glyph);

// Standard getters
Game.Tile.prototype.isWalkable = function() {
    return this._walkable;
};
Game.Tile.prototype.isDiggable = function() {
    return this._diggable;
};
Game.Tile.prototype.isBlockingLight = function() {
    if (Debug.clearFog)
        return false;
    else
        return this._blocksLight;
};
Game.Tile.prototype.getDescription = function() {
    return this._description;
};

// Helper function
Game.getNeighborPositions = function(x, y) {
    var tiles = [];
    // Generate all possible offsets
    for (var dX = -1; dX < 2; dX ++) {
        for (var dY = -1; dY < 2; dY++) {
            // Make sure it isn't the same tile
            if (dX == 0 && dY == 0) {
                continue;
            }
            tiles.push({x: x + dX, y: y + dY});
        }
    }
    return tiles.randomize();
};