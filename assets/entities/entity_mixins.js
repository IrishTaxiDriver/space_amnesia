// Create our Mixins namespace
Game.EntityMixins = {};

//TODO: Consider splitting this up into different script files as it grows.
//Considered! assets/entities/mixins/

// Main player's actor mixin
Game.EntityMixins.PlayerActor = {
    name: 'PlayerActor',
    groupName: 'Actor',
    act: function() {
        if (this._acting) {
            return;
        }
        this._acting = true;
        if (!Debug.sated)
            this.addTurnHunger();
        // Detect if the game is over
        if (!this.isAlive()) {
            Game.Screen.playScreen.setGameEnded(true);
            // Send a last message to the player
            Game.sendMessage(this, loc.EntityPlayerPressToContinue);
        }
        // Re-render the screen
        Game.refresh();
        // Lock the engine and wait asynchronously
        // for the player to press a key.
        this.getMap().getEngine().lock();
        this._acting = false;
    }
};

//TODO: Credits function like an item when dropped.
//TODO: Credits show up on the inventory screen.
Game.EntityMixins.Currency = {
    name: 'EntityCurrency',
    groupName: 'EntityCurrency',
    init: function(template) {
        this._currency = template["type"] || [];
        this._currency[loc.ItemCurrencyCreditsName] = 0;
    },
    subtractCurrencyFromType: function(type, amount) {
        if (this._currency[type] - amount < 0) {
            return false;
        }
        else {
            this._currency[type]  -= amount;
            return true;
        }
    },
    addCurrencyToType: function(type, amount) {
        this._currency[type]  += amount;
    },
    getCurrencyFromType: function(type) {
        return this._currency[type] ;
    },
    setCurrencyForType: function(type, amount) {
        this._currency[type] = amount;
    },
    addCurrencyType: function(type) {
        this._currency[type] = 0;
    },
    removeCurrencyType: function(type) {
        this._currency[type] = null;
    },
    dropCurrencyType: function(type, amount) {
        //If an amount isn't specified, drop it all.
        if (!amount) {
            amount = this._currency[type];
        }
        this._currency[type] -= amount;
    },
}

// Container Mixin
// TODO: Look at implementing these in a less hacky way.
// TODO: Chests always show up after they're seen? Like stairs?
Game.EntityMixins.Container = {
    name: 'Container',
    groupName: 'Container',
    init: function(template) {
        this._components = template['components'] || null;
        this._items = template['items'] || [];
        this._name = template["name"] || null;
        this._canPickUp = template["canPickUp"] || false;
        this._locked = template["locked"] || false;
    },
    getCanPickUp: function() {
        return this._canPickUp;
    },
    getLocked: function() {
        return this._locked;
    },
    getContents: function() {
        return this._items;
    },
    getName: function() {
        return this._name;
    },
    setContents: function(items) {
        this._items = items;
    },
    setLocked: function(state) {
        this._locked = state;
    },
    setCanPickUp: function(state) {
        this._canPickUp = state;
    },
    showContainerLoot: function() {
        Debug.log("Game.EntityMixins.Container.showContainerLoot: Displaying Container items.");
        Game.Screen.playScreen.showItemsSubScreen(Game.Screen.containerScreen,
            this.getContents(),
            loc.ContainerScreenLootEmpty, this);
    },
    removeContentsFromContainer: function(entity, item) {
        //remove the item from this._items
        this._items.pop(item);
        entity.addItem(item);
    },
    addContentsToContainer: function(item) {
        this._items.push(item);
    }
};

Game.EntityMixins.TaskActor = {
    name: 'TaskActor',
    groupName: 'Actor',
    init: function(template) {
        // Load tasks
        this._tasks = template['tasks'] || ['wander'];
        if (this.hasMixin(Game.EntityMixins.EntityRarity)) {
            this.setRandomRarity();
        } 
    },
    act: function() {
        // Iterate through all our tasks
        for (var i = 0; i < this._tasks.length; i++) {
            if (this.canDoTask(this._tasks[i])) {
                // If we can perform the task, execute the function for it.
                this[this._tasks[i]]();
                return;
            }
        }
    },
    canDoTask: function(task) {
        if (task === 'hunt') {
            return this.hasMixin('Sight') && this.canSee(this.getMap().getPlayer());
        } else if (task === 'wander') {
            return true;
        } else {
            throw new Error(loc.EntityUndefinedTask + task);
        }
    },
    hunt: function() {
        var player = this.getMap().getPlayer();

        if (Debug.noTarget)
            return;

        // If we are adjacent to the player, then attack instead of hunting.
        var offsets = Math.abs(player.getX() - this.getX()) + 
            Math.abs(player.getY() - this.getY());
        if (offsets === 1) {
            if (this.hasMixin('Attacker')) {
                this.attack(player);
                return;
            }
        }

        // Generate the path and move to the first tile.
        var source = this;
        var z = source.getZ();
        var path = new ROT.Path.AStar(player.getX(), player.getY(), function(x, y) {
            // If an entity is present at the tile, can't move there.
            var entity = source.getMap().getEntityAt(x, y, z);
            if (entity && entity !== player && entity !== source) {
                return false;
            }
            return source.getMap().getTile(x, y, z).isWalkable();
        }, {topology: 4});
        // Once we've gotten the path, we want to move to the second cell that is
        // passed in the callback (the first is the entity's strting point)
        var count = 0;
        path.compute(source.getX(), source.getY(), function(x, y) {
            if (count == 1) {
                source.tryMove(x, y, z);
            }
            count++;
        });
    },
    wander: function() {
        // Flip coin to determine if moving by 1 in the positive or negative direction
        var moveOffset = (Math.round(Math.random()) === 1) ? 1 : -1;
        // Flip coin to determine if moving in x direction or y direction
        if (Math.round(Math.random()) === 1) {
            this.tryMove(this.getX() + moveOffset, this.getY(), this.getZ());
        } else {
            this.tryMove(this.getX(), this.getY() + moveOffset, this.getZ());
        }
    }
};

// This mixin signifies an entity can take damage and be destroyed
Game.EntityMixins.Destructible = {
    name: 'Destructible',
    init: function(template) {
        this._maxHp = template['maxHp'] || 10;
        // We allow taking in health from the template incase we want
        // the entity to start with a different amount of HP than the 
        // max specified.
        this._hp = template['hp'] || this._maxHp;
        this._defenseValue = template['defenseValue'] || 0;
        this._xpValue = template['xpValue'] || 0;
        this._habitat = template['habitat'] || "none";
    },
    getDefenseValue: function(slot) {
        var modifier = 0;
        // If we can equip items, then have to take into 
        // consideration weapon and armor
        if (this.hasMixin(Game.EntityMixins.Equipper)) {
            if (this.getItemInSlot(slot)) {
                modifier += this.getItemInSlot(slot).getDefenseValue();
            }
        }
        return this._defenseValue + modifier;
    },
    getHp: function() {
        return this._hp;
    },
    getMaxHp: function() {
        return this._maxHp;
    },
    setHp: function(hp) {
        this._hp = hp;
    },
    getXPValue: function() {
        return this._xpValue;
    },
    getHabitat: function() {
        return this._habitat;
    },
    increaseDefenseValue: function(value) {
        // If no value was passed, default to 2.
        value = value || 2;
        // Add to the defense value.
        this._defenseValue += value;
        Game.sendMessage(this, loc.EntityIncreasedDefenseValue);
    },
    increaseMaxHp: function(value) {
        // If no value was passed, default to 10.
        value = value || 10;
        // Add to both max HP and HP.
        this._maxHp += value;
        this._hp += value;
        Game.sendMessage(this, loc.EntityIncreasedHealthValue);
    },
    takeDamage: function(attacker, damage) {
        this._hp -= damage;
        // If have 0 or less HP, then remove ourseles from the map
        if (this._hp <= 0) {
            Game.sendMessage(attacker, loc.EntityKill, [this.getName()]);
            // Raise events
            this.raiseEvent('onDeath', attacker);
            attacker.raiseEvent('onKill', this);
            this.kill();
        }
    },
    listeners: {
        onGainLevel: function() {
            // Heal the entity.
            this.setHp(this.getMaxHp());
        },
        details: function() {
            return [
                {key: 'defense', value: this.getDefenseValue()},
                {key: 'hp', value: this.getHp()}
            ];
        }
    }
};

Game.EntityMixins.MessageRecipient = {
    name: 'MessageRecipient',
    init: function(template) {
        this._messages = [];
    },
    receiveMessage: function(message) {
        if (this._messages.length = 5)
            this._messages.shift();
        this._messages.push(message);
    },
    getMessages: function() {
        return this._messages;
    },
    clearMessages: function() {
        this._messages = [];
    }
};

// This signifies our entity posseses a field of vision of a given radius.
// TODO: Make this function more like a circle than a diamond.
Game.EntityMixins.Sight = {
    name: 'Sight',
    groupName: 'Sight',
    init: function(template) {
        this._sightRadius = template['sightRadius'] || 5;
    },
    getSightRadius: function() {
        return this._sightRadius;
    },
    increaseSightRadius: function(value) {
        // If no value was passed, default to 1.
        value = value || 1;
        // Add to sight radius.
        this._sightRadius += value;
        Game.sendMessage(this, loc.EntityIncreasedSightValue);
    },
    canSee: function(entity) {
        // If not on the same map or on different floors, then exit early
        if (!entity || this._map !== entity.getMap() || this._z !== entity.getZ()) {
            return false;
        }

        var otherX = entity.getX();
        var otherY = entity.getY();

        if (!Debug.allSeeing)
        {
            // If we're not in a square field of view, then we won't be in a real
            // field of view either.
            if ((otherX - this._x) * (otherX - this._x) +
                (otherY - this._y) * (otherY - this._y) >
                this._sightRadius * this._sightRadius) {
                return false;
            }

            // Compute the FOV and check if the coordinates are in there.
            var found = false;
            this.getMap().getFov(this.getZ()).compute(
                this.getX(), this.getY(), 
                this.getSightRadius(), 
                function(x, y, radius, visibility) {
                    if (x === otherX && y === otherY) {
                        found = true;
                    }
                });
        }
        return found;
    }
};

// Message sending functions
Game.sendMessage = function(recipient, message, args) {
    // Make sure the recipient can receive the message 
    // before doing any work.
    if (recipient.hasMixin(Game.EntityMixins.MessageRecipient)) {
        // If args were passed, then we format the message, else
        // no formatting is necessary
        if (args) {
            message = vsprintf(message, args);
        }
        recipient.receiveMessage(message);
    }
};
Game.sendMessageNearby = function(map, centerX, centerY, centerZ, message, args) {
    // If args were passed, then we format the message, else
    // no formatting is necessary
    if (args) {
        message = vsprintf(message, args);
    }
    // Get the nearby entities
    entities = map.getEntitiesWithinRadius(centerX, centerY, centerZ, 5);
    // Iterate through nearby entities, sending the message if
    // they can receive it.
    for (var i = 0; i < entities.length; i++) {
        if (entities[i].hasMixin(Game.EntityMixins.MessageRecipient)) {
            entities[i].receiveMessage(message);
        }
    }
};

//TODO: Equip items don't count against inventory space.
//TODO: Other equip slots can give inventory space? (ex: fanny pack in waist slot)
//TODO: Switching from a smaller backpack to a larger backpack doesn't just add the difference.
Game.EntityMixins.InventoryHolder = {
    name: 'InventoryHolder',
    init: function(template) {
        // Default to 10 inventory slots.
        this.inventorySlots = template['inventorySlots'] || 10;
        // Set up an empty inventory.
        this._items = new Array(this.inventorySlots);
    },
    getItems: function() {
        return this._items;
    },
    getItem: function(i) {
        return this._items[i];
    },
    getFullInventorySlots: function() {
        var num = 0;
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i]) {
                num++;
            }
        }
        return num;
    },
    modifyInventorySlots: function(change) {
        Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Backpack changed. New backpack has " + change + " slots.");
        var invSize = 0;
        if (change > 0) {
            //Add empty slots onto the end of the array.
            invSize = this._items.length;
            for (var i = invSize; i < invSize + change; i++) {
                Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Adding inventory slot.");
                this._items.push(null);
            }
        } else {
            //We don't have enough inventory slots to match our current inventory size.
            //Try removing empty inventory slots first.
            Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: " + this._items.length + " < " + this.inventorySlots);
            invSize = this._items.length;
            if (invSize > this.inventorySlots) {
                Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Removing Slots: Try remove empty slots");
                for (var i = invSize - 1; i >= this.inventorySlots; i--) {
                    if (this._items[i] == null) {
                        Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Removing empty inventory slot.");
                        this._items.pop(this._items[i]);
                    }
                }
            }
            //If we still haven't removed enough space, drop non-equipped items next if we have to.
            Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: " + this._items.length + " < " + this.inventorySlots);
            invSize = this._items.length;
            if (invSize > this.inventorySlots) {
                Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Removing Slots: Try remove unequipped items.");
                for (var i = invSize - 1; i >= this.inventorySlots; i--) {
                    if (this._items[i]) {
                        //Skip equipped items.
                        if (!Util.isFunction(this._items[i].getSlot)) {
                            Debug.log("Game.EntityMixins.InventoryHolder.modifyInventorySlots: Removing unequipped item.");
                            Game.sendMessage(this, loc.ItemListScreenDroppedItem, [this._items[i].getName()]);
                            this.dropItem(i);
                            this._items.pop(this._items[i]);
                        }
                    }
                }
            }
        }
    },
    addItem: function(item) {
        // Try to find a slot, returning true only if we could add the item.
        for (var i = 0; i < this._items.length; i++) {
            if (!this._items[i]) {
                this._items[i] = item;
                return true;
            }
        }
        return false;
    },
    removeItem: function(i) {
        // If we can equip items, then make sure we unequip the item we are removing.
        if (this._items[i] && this.hasMixin(Game.EntityMixins.Equipper) && (Util.isFunction(this._items[i].getSlot))) {
            this.unequip(this._items[i]);
        }
        // Simply clear the inventory slot.
        this._items[i] = null;
    },
    canAddItem: function() {
        // Check if we have an empty slot.
        for (var i = 0; i < this._items.length; i++) {
            if (!this._items[i]) {
                return true;
            }
        }
        return false;
    },
    pickupItemsFromContainer: function(indices, container) {
        var items = [];
        var added = 0;
        items = container.getContents();

        for (var i = 0; i < indices.length; i++) {
            // Try to add the item. If our inventory is not full, then splice the 
            // item out of the list of items. In order to fetch the right item, we
            // have to offset the number of items already added.
            if (this.addItem(items[indices[i]  - added])) {
                items.splice(indices[i] - added, 1);
                added++;
            } else {
                // Inventory is full
                break;
            }
        }

        // Update the container items
        container.setContents(items);

        // Return true only if we added all items
        return added === indices.length;
    },
    //TODO: Stop the "you picked up nothing" message if you pick up only currency.
    pickupItems: function(indices) {
        // Allows the user to pick up items from the map, where indices is
        // the indices for the array returned by map.getItemsAt
        var mapItems = this._map.getItemsAt(this.getX(), this.getY(), this.getZ());
        var added = 0;
        // Iterate through all indices.
        for (var i = 0; i < indices.length; i++) {
            //Check if the item is currency first.
            if (mapItems[i].hasMixin(Game.ItemMixins.Currency))
            {
                this.addCurrencyToType(mapItems[i].getType(), mapItems[i].getValue());
                Game.sendMessage(this, loc.InventoryScreenYouPickUpCurrency, [mapItems[i].getValue(),mapItems[i].getType()]);
                this._map.removeItem(this.getX(), this.getY(), this.getZ(), mapItems[i]);
            } else {
                // Try to add the item. If our inventory is not full, then splice the 
                // item out of the list of items. In order to fetch the right item, we
                // have to offset the number of items already added.
                if (this.addItem(mapItems[indices[i]  - added])) {
                    mapItems.splice(indices[i] - added, 1);
                    added++;
                } else {
                    // Inventory is full
                    break;
                }
            }
        }

        // Update the map items
        this._map.setItemsAt(this.getX(), this.getY(), this.getZ(), mapItems);

        // Return true only if we added all items
        return added === indices.length;
    },
    dropItem: function(i) {
        // Drops an item to the current map tile
        if (this._items[i]) {
            if (this._map) {
                this._map.addItem(this.getX(), this.getY(), this.getZ(), this._items[i]);
            }
            this.removeItem(i);      
        }
    },
    sortItems: function() {
        this._items = this._items.filter(function (item) {
            return item != null;
        });
    },
    getFilledInventorySlots: function() {
        var count = 0;

        this._items.forEach(function(item) {
            if (item != null || item != undefined)
                count++;
        });

        return count;
    }
};

Game.EntityMixins.FoodConsumer = {
    name: 'FoodConsumer',
    init: function(template) {
        this._maxFullness = template['maxFullness'] || 1000;
        // Start halfway to max fullness if no default value
        this._fullness = template['fullness'] || (this._maxFullness / 2);
        // Number of points to decrease fullness by every turn.
        this._fullnessDepletionRate = template['fullnessDepletionRate'] || 1;
    },
    addTurnHunger: function() {
        // Remove the standard depletion points
        this.modifyFullnessBy(-this._fullnessDepletionRate);
    },
    modifyFullnessBy: function(points) {
        this._fullness += points;
        if (this._fullness <= 0) {
            this.kill(loc.EntityStarved);
        } else if (this._fullness > this._maxFullness) {
            this.kill(loc.EntityTooFull);
        }
    },
    getHungerState: function() {
        // Fullness points per percent of max fullness
        var perPercent = this._maxFullness / 100;
        // 5% of max fullness or less = starving
        if (this._fullness <= perPercent * 5) {
            return loc.EntityStatusStarving;
        // 25% of max fullness or less = hungry
        } else if (this._fullness <= perPercent * 25) {
            return loc.EntityStatusHungry;
        // 95% of max fullness or more = oversatiated
        } else if (this._fullness >= perPercent * 95) {
            return loc.EntityStatusOversatiated;
        // 75% of max fullness or more = full
        } else if (this._fullness >= perPercent * 75) {
            return loc.EntityStatusFull;
        // Anything else = not hungry
        } else {
            return loc.EntityStatusNotHungry;
        }
    }
};

Game.EntityMixins.CorpseDropper = {
    name: 'CorpseDropper',
    init: function(template) {
        // Chance of dropping a corpse (out of 100).
        this._corpseDropRate = template['corpseDropRate'] || 100;
    },
    listeners: {
        onDeath: function(attacker) {
            // Check if we should drop a corpse.
            if (Math.round(Math.random() * 100) <= this._corpseDropRate) {
                // Create a new corpse item and drop it.
                this._map.addItem(this.getX(), this.getY(), this.getZ(),
                    Game.ItemRepository.create('corpse', {
                        name: this._name + " " + loc.EntityCorpse,
                        foreground: this._foreground,
                        icon: 'assets/images/inventory/icons/no_icon.jpg',
                        description: 'A dead ' + this._name + '.'
                    }));
            }    
        }
    }
};

Game.EntityMixins.Equipper = {
    name: 'Equipper',
    init: function(template) {
        this._equipped = [];
        this._equipped[loc.EntityPlayerEquipSlotLHand] = null;
        this._equipped[loc.EntityPlayerEquipSlotRHand] = null;
        this._equipped[loc.EntityPlayerEquipSlotHead] = null;
        this._equipped[loc.EntityPlayerEquipSlotChest] = null;
        this._equipped[loc.EntityPlayerEquipSlotHands] = null;
        this._equipped[loc.EntityPlayerEquipSlotLegs] = null;
        this._equipped[loc.EntityPlayerEquipSlotFeet] = null;
        this._equipped[loc.EntityPlayerEquipSlotBack] = null;
        this._equipped[loc.EntityPlayerEquipSlotWaist] = null;
    },
    equip: function(item) {
        Debug.log("Game.EntityMixins.Equipper.equip: Equipping " + item.getName() + " in slot: " + item.getSlot());
        this._equipped[item.getSlot()] = item;
        item.onEquip(this);
        if (item.getSlot() == loc.EntityPlayerEquipSlotBack) {
            this.modifyInventorySlots(item.getInventorySlots());
        }
    },
    unequip: function(item) {
        if (item == "all") {
            Debug.log("Game.EntityMixins.Equipper.unequip: Removing all.");
            //TODO: uhh figure out how to do this with the removeEquip function.
            this._equipped[loc.EntityPlayerEquipSlotLHand] = null;
            this._equipped[loc.EntityPlayerEquipSlotRHand] = null;
            this._equipped[loc.EntityPlayerEquipSlotHead] = null;
            this._equipped[loc.EntityPlayerEquipSlotChest] = null;
            this._equipped[loc.EntityPlayerEquipSlotHands] = null;
            this._equipped[loc.EntityPlayerEquipSlotLegs] = null;
            this._equipped[loc.EntityPlayerEquipSlotFeet] = null;
            this._equipped[loc.EntityPlayerEquipSlotBack] = null;
            this._equipped[loc.EntityPlayerEquipSlotWaist] = null;         
        } else { //its an item
            Debug.log("Game.EntityMixins.Equipper.unequip: Removing " + item.getName() + " in slot: " + item.getSlot());
            if (item.getSlot() == loc.EntityPlayerEquipSlotBack) {
                this.modifyInventorySlots(item.getInventorySlots() * -1);
            }
            this._equipped[item.getSlot()] = null;
            if (item.getSlot() != "none")
                item.removeEquip(this);
        }
    },
    getItemInSlot: function(slot) {
        return this._equipped[slot];
    },
    getItemInSlotName: function(slot) {
        item = this.getItemInSlot(slot);
        if (item === null)
            return "empty";
        else
            return item.getName();
    }
};

Game.EntityMixins.ExperienceGainer = {
    name: 'ExperienceGainer',
    init: function(template) {
        this._level = template['level'] || 1;
        this._experience = template['experience'] || 0;
        this._statPointsPerLevel = template['statPointsPerLevel'] || 1;
        this._statPoints = 0;
        // Determine what stats can be levelled up.
        this._statOptions = [];
        if (this.hasMixin('Attacker')) {
            this._statOptions.push([loc.EntityAddAttackValue, this.increaseAttackValue]);
        }
        if (this.hasMixin('Destructible')) {
            this._statOptions.push([loc.EntityAddDefenseValue, this.increaseDefenseValue]);   
            this._statOptions.push([loc.EntityAddMaxHealthValue, this.increaseMaxHp]);
        }
        if (this.hasMixin('Sight')) {
            this._statOptions.push([loc.EntityAddSightValue, this.increaseSightRadius]);
        }
    },
    getLevel: function() {
        return this._level;
    },
    getExperience: function() {
        return this._experience;
    },
    getNextLevelExperience: function() {
        return (this._level * this._level) * 10;
    },
    getStatPoints: function() {
        return this._statPoints;
    },
    setStatPoints: function(statPoints) {
        this._statPoints = statPoints;
    },
    giveStatPoints: function(statPoints) {
        this._statPoints += statPoints;
    },
    getStatOptions: function() {
        return this._statOptions;
    },
    giveExperience: function(points) {
        var statPointsGained = 0;
        var levelsGained = 0;
        // Loop until we've allocated all points.
        while (points > 0) {
            // Check if adding in the points will surpass the level threshold.
            if (this._experience + points >= this.getNextLevelExperience()) {
                // Fill our experience till the next threshold.
                var usedPoints = this.getNextLevelExperience() - this._experience;
                points -= usedPoints;
                this._experience += usedPoints;
                // Level up our entity!
                this._level++;
                levelsGained++;
                this._statPoints += this._statPointsPerLevel;
                statPointsGained += this._statPointsPerLevel;
            } else {
                // Simple case - just give the experience.
                this._experience += points;
                points = 0;
            }
        }
        // Check if we gained at least one level.
        if (levelsGained > 0) {
            Game.sendMessage(this, loc.EntityAddLevel, [this._level]);
            this.raiseEvent('onGainLevel');
        }
    },
    listeners: {
        onKill: function(victim) {
            var exp = victim.getMaxHp() + victim.getDefenseValue();
            if (victim.hasMixin('Attacker')) {
                exp += victim.getXPValue();
            }
            // Account for level differences
            if (victim.hasMixin('ExperienceGainer')) {
                exp -= (this.getLevel() - victim.getLevel()) * 3;
            }
            // Only give experience if more than 0.
            if (exp > 0) {
                this.giveExperience(exp);
            }
        },
        details: function() {
            return [{key: 'level', value: this.getLevel()}];
        }
    }
};

Game.EntityMixins.RandomStatGainer = {
    name: 'RandomStatGainer',
    groupName: 'StatGainer',
    listeners: {
        onGainLevel: function() {
            var statOptions = this.getStatOptions();
            // Randomly select a stat option and execute the callback for each
            // stat point.
            while (this.getStatPoints() > 0) {
                // Call the stat increasing function with this as the context.
                statOptions.random()[1].call(this);
                this.setStatPoints(this.getStatPoints() - 1);
            }
        }
    }
};

Game.EntityMixins.PlayerStatGainer = {
    name: 'PlayerStatGainer',
    groupName: 'StatGainer',
    listeners: {
        onGainLevel: function() {
            // Setup the gain stat screen and show it.
            Game.Screen.gainStatScreen.setup(this);
            Game.Screen.playScreen.setSubScreen(Game.Screen.gainStatScreen);
        }
    }
};

Game.EntityMixins.Usable = {
    name: 'Usable',
    groupName: 'Usable',
    init: function(template) {
        this._name = template["name"] || null;
        this._canPickUp = template["canPickUp"] || false;
        this._locked = template["locked"] || false;
    },
    getName: function() {
        return this._name;
    },
    getCanPickUp: function() {
        return this._canPickUp;
    },
    getLocked: function() {
        return this._locked;
    }
};

//TODO: Enemy rarities. Regular, elite, boss, etc.
Game.EntityMixins.EntityRarity = {
    name: 'EntityRarity',
    groupName: 'Actor',
    init: function(template) {
        this._rarity = this.setRandomRarity();
    },
    getRarity: function() {
        return this._rarity;
    },
    setRandomRarity: function() {
        rarity = Math.round(Math.random() * 100);

        if (rarity <= 60) {
            this.setRarity(0);
        } else if (rarity >= 61 && rarity <= 80 ) {
            this.setRarity(1);
        } else if (rarity >= 81 && rarity <= 90 ) {
            this.setRarity(2);
        } else if (rarity >= 91 && rarity <= 95 ) {
            this.setRarity(3);
        } else if (rarity >= 96 && rarity <= 98 ) {
            this.setRarity(4);
        } else if (rarity >= 99 && rarity <= 100 ) {
            this.setRarity(5);
        }
    },
    setRarity: function(rarity) {
        this._rarity = rarity;
        this.setColorBasedOnRarity();
        this.setPrefixForRarity();
    },
    getPrefixForRarity: function() {
        if (this._rarity == 0) { //Grey
            return loc.EntityRarity0;
        } else if (this._rarity == 1 ) { //White
            return loc.EntityRarity1;
        } else if (this._rarity == 2 ) { //Green
            return loc.EntityRarity2;
        } else if (this._rarity == 3 ) { //Blue
            return loc.EntityRarity3;
        } else if (this._rarity == 4 ) { //Purple
            return loc.EntityRarity4;
        } else if (this._rarity == 5 ) { //Yellow
            return loc.EntityRarity5;
        } else if (this._rarity == 6 ) { //Orange
            return loc.EntityRarity6;
        } else if (this._rarity == 7 ) { //Red
            return loc.EntityRarity7;
        } else {
            return "";
        }
    },
    getColorForRarity: function() {
        if (this._rarity == 0) { //Grey
            return 'grey';
        } else if (this._rarity == 1 ) { //White
            return 'white';
        } else if (this._rarity == 2 ) { //Green
            return 'green';
        } else if (this._rarity == 3 ) { //Blue
            return 'blue';
        } else if (this._rarity == 4 ) { //Purple
            return 'purple';
        } else if (this._rarity == 5 ) { //Yellow
            return 'yellow';
        } else if (this._rarity == 6 ) { //Orange
            return 'orange';
        } else if (this._rarity == 7 ) { //Red
            return 'red';
        }
    },
    setColorBasedOnRarity: function() {
        Debug.log("Game.EntityMixins.EntityRarity.setColorBasedOnRarity: Setting " + this._name + " to rarity " + this._rarity);
        this.setForeground(this.getColorForRarity());
    },
    setPrefixForRarity: function() {
        rarityPrefix = this.getPrefixForRarity();
        Debug.log("Game.ItemMixins.ItemRarity.setPrefixForRarity: Setting " + this._name + " to name " + rarityPrefix + this._name);
        this._name = rarityPrefix + this._name;       
    }
}