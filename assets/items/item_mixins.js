Game.ItemMixins = {};

// Edible Mixin
Game.ItemMixins.Edible = {
    name: 'Edible',
    init: function(template) {
        // Number of points to add to hunger
        this._foodValue = template['foodValue'] || 5;
        // Number of times the item can be consumed
        this._maxConsumptions = template['consumptions'] || 1;
        this._remainingConsumptions = this._maxConsumptions;
        this._name = template["name"] || null;
    },
    eat: function(entity) {
        if (entity.hasMixin('FoodConsumer')) {
            if (this.hasRemainingConsumptions()) {
                entity.modifyFullnessBy(this._foodValue);
                this._remainingConsumptions--;
            }
        }
    },
    hasRemainingConsumptions: function() {
        return this._remainingConsumptions > 0;
    },
    describe: function() {
        if (this._maxConsumptions != this._remainingConsumptions) {
            return 'partly eaten ' + Game.Item.prototype.describe.call(this);
        } else {
            return this._name;
        }
    },
    listeners: {
        'details': function() {
            return [{key: 'food', value: this._foodValue}];
        }
    }
};

// Craftable Mixin
Game.ItemMixins.Craftable = {
    name: 'Craftable',
    init: function(template) {
        this._components = template['components'] || null;
        this._name = template["name"] || null;
    }

};

Game.ItemMixins.Currency = {
    name: 'ItemCurrency',
    init: function(template) {
        this._type = template['type'] || null;
        this._value = template['value'] || 0;
    },
    randomizeValue: function(max) {
        this._value = Math.floor(Math.random() * (max + 1));
    },
    getValue: function() {
        return this._value;
    },
    getType: function() {
        return this._type;
    },
    setValue: function(amount) {
        this._value = amount;
    }
};

//TODO: Rarity shows up in name.
Game.ItemMixins.Rarity = {
    name: 'Rarity',
    init: function(template) {
        this._rarity = this.setRandomRarity() || 0;
    },
    getRarity: function() {
        return this._rarity;
    },
    setRandomRarity: function() {
        rarity = Math.round(Math.random() * 100);

        if (rarity <= 60) {
            return 0;
        } else if (rarity >= 61 && rarity <= 80 ) {
            return 1;
        } else if (rarity >= 81 && rarity <= 90 ) {
            return 2;
        } else if (rarity >= 91 && rarity <= 95 ) {
            return 3;
        } else if (rarity >= 96 && rarity <= 98 ) {
            return 4;
        } else if (rarity >= 99 && rarity <= 100 ) {
            return 5;
        }
    },
    setRarity: function(rarity) {
        this._rarity = rarity;
        this.setColorBasedOnRarity();
    },
    getColorForRarity: function(rarity) {
        if (rarity == 0) { //Grey
            return 'grey';
        } else if (rarity == 1 ) { //White
            return 'white';
        } else if (rarity == 2 ) { //Green
            return 'green';
        } else if (rarity == 3 ) { //Blue
            return 'blue';
        } else if (rarity == 4 ) { //Purple
            return 'purple';
        } else if (rarity == 5 ) { //Yellow
            return 'yellow';
        } else if (rarity == 6 ) { //Orange
            return 'orange';
        } else if (rarity == 7 ) { //Red
            return 'red';
        }
    },
    setColorBasedOnRarity: function() {
        Debug.log("Game.ItemMixins.setColorBasedOnRarity: Setting " + this._name + " to rarity " + this._rarity);
        this.setForeground(this.getColorForRarity(this._rarity));
    }
};

Game.ItemMixins.Set = {
    name: 'Set',
    init: function(template) {
        this._setName = template['setName'] || null;
    },
    //getSetBonuses
    //applySetBonuses
    //probably more
};

// Equipment Mixin
Game.ItemMixins.Equippable = {
    name: 'Equippable',
    init: function(template) {
        this._attackValue = template['attackValue'] || 0;
        this._attackType = template['attackType'] || 'slash';
        this._defenseValue = template['defenseValue'] || 0;
        this._defenseType = template['defenseType'] || 'slash';
        this._wieldable = template['wieldable'] || false;
        this._wearable = template['wearable'] || false;
        this._slot = template['slot'] || 'none';
        this._range = template['range'] || 0;
        this._name = template['name'] || null;
        this._inventorySlots = template['inventorySlots'] || 0;
        this._prefix = template['prefix'] || '';
    },
    getAttackValue: function() {
        return this._attackValue;
    },
    getDefenseValue: function() {
        return this._defenseValue;
    },
    getInventorySlots: function() {
    	return this._inventorySlots;
    },
    getSlot: function() {
        return this._slot;
    },
    getRange: function() {
        return this._range;
    },
    getName: function() {
        return this._name;
    },
    isWieldable: function() {
        return this._wieldable;
    },
    isWearable: function() {
        return this._wearable;
    },
    getPrefix: function() {
        return this._prefix;
    },
    listeners: {
        'details': function() {
            var results = [];
            if (this._wieldable) {
                results.push({key: 'attack', value: this.getAttackValue()});
            }
            if (this._wearable) {
                results.push({key: 'defense', value: this.getDefenseValue()});
            }
            return results;
        }
    }
};