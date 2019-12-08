Game.ItemMixins = {};

Game.ItemMixins.ItemCore = {
    name: 'ItemCore',
    init: function(template) {
        this._slot = template['slot'] || 'none';
        this._name = template['name'] || null;
        this._prefix = template['prefix'] || '';
        this._icon = template['icon'] || 'assets/images/inventory/icons/no_icon.jpg';
        this._description = template['description'] || '';
    },
    getSlot: function() {
        return this._slot;
    },
    getName: function() {
        return this._name;
    },
    getPrefix: function() {
        return this._prefix;
    },
    getIcon: function() {
        return this._icon;
    },
    getDescription: function() {
        return this._description;
    }
};

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

Game.ItemMixins.ItemRarity = {
    name: 'ItemRarity',
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
    },
    getPrefixForRarity: function() {
        if (this._rarity == 0) { //Grey
            return loc.ItemRarity0;
        } else if (this._rarity == 1 ) { //White
            return loc.ItemRarity1;
        } else if (this._rarity == 2 ) { //Green
            return loc.ItemRarity2;
        } else if (this._rarity == 3 ) { //Blue
            return loc.ItemRarity3;
        } else if (this._rarity == 4 ) { //Purple
            return loc.ItemRarity4;
        } else if (this._rarity == 5 ) { //Yellow
            return loc.ItemRarity5;
        } else if (this._rarity == 6 ) { //Orange
            return loc.ItemRarity6;
        } else if (this._rarity == 7 ) { //Red
            return loc.ItemRarity7;
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
        Debug.log("Game.ItemMixins.ItemRarity.setColorBasedOnRarity: Setting " + this._name + " to rarity " + this._rarity);
        this.setForeground(this.getColorForRarity());
    },
};

Game.ItemMixins.Set = {
    name: 'Set',
    init: function(template) {
        this._name = template['name'] || null;
        this._itemsInSet = template['itemsInSet'] || null;
        this._itemSetBonuses = this.getSetBonuses() || [null];
    },
    getSetBonuses: function() {

    },
    applySetBonuses: function() {

    },
    listInSet: function() {
        
    }
};

// Equipment Mixin
Game.ItemMixins.Equippable = {
    name: 'Equippable',
    init: function(template) {
        this._attackValue = template['attackValue'] || 0;
        this._attackType = template['attackType'] || 'slash';
        this._defenseValue = template['defenseValue'] || 0;
        this._defenseType = template['defenseType'] || 'slash';
        this._critValue = template['critValue'] || 0;
        this._dodgeValue = template['dodgeValue'] || 0;
        this._hitValue = template['hitValue'] || 0;
        this._parryValue = template['parryValue'] || 0;
        this._wieldable = template['wieldable'] || false;
        this._wearable = template['wearable'] || false;
        this._slot = template['slot'] || 'none';
        this._range = template['range'] || 0;
        this._name = template['name'] || null;
        this._inventorySlots = template['inventorySlots'] || 0;
        this._prefix = template['prefix'] || '';
        this._icon = template['icon'] || 'assets/images/inventory/icons/no_icon.jpg';
        this._description = template['description'] || '';
    },
    getAttackValue: function() {
        return this._attackValue;
    },
    getDefenseValue: function() {
        return this._defenseValue;
    },
    getCritValue: function() {
        return this._critValue;
    },
    getDodgeValue: function() {
        return this._dodgeValue;
    },
    getHitValue: function() {
        return this._hitValue;
    },
    getParryValue: function() {
        return this._parryValue;
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
        if (this.hasMixin(Game.ItemMixins.ItemRarity))
            return this.getPrefixForRarity() + this._name;
        else
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
    getIcon: function() {
        return this._icon;
    },
    getDescription: function() {
        return this._description;
    },
    onEquip: function(ent) {

        ent._attackValue += this.getAttackValue();
        ent._defenseValue += this.getDefenseValue();
        ent._critValue += this.getCritValue();
        ent._hitValue += this.getHitValue();
        ent._dodgeValue += this.getDodgeValue();
        ent._parryValue += this.getParryValue();

        Debug.log("Game.ItemMixins.Equippable.onEquip: Adding bonuses to " + ent.getName() + " from " + this.getName() + ": "
            + "\n-attack: " + this.getAttackValue() + " (total: " + ent.getAttackValue() + ")"
            + "\n-defense: " + this.getDefenseValue() + " (total: " + ent.getDefenseValue() + ")"
            + "\n-crit: " + this.getCritValue() + " (total: " + ent.getCritValue() + ")"
            + "\n-hit: " + this.getHitValue() + " (total: " + ent.getHitValue() + ")" 
            + "\n-dodge: " + this.getDodgeValue() + " (total: " + ent.getDodgeValue() + ")"
            + "\n-parry: " + this.getParryValue() + " (total: " + ent.getParryValue() + ")");
    },
    removeEquip: function(ent) {

        Debug.log("Game.ItemMixins.Equippable.removeEquip: Removing bonuses from " + ent.getName() + " from " + this.getName());

        ent._attackValue -= this.getAttackValue();
        ent._defenseValue -= this.getDefenseValue();
        ent._critValue -= this.getCritValue();
        ent._hitValue -= this.getHitValue();
        ent._dodgeValue -= this.getDodgeValue();
        ent._parryValue -= this.getParryValue();
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