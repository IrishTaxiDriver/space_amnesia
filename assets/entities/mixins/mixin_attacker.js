// This signifies our entity can attack basic destructible entities
Game.EntityMixins.Attacker = {
    name: 'Attacker',
    groupName: 'Attacker',
    init: function(template) {
        this._attackValue = template['attackValue'] || 1;
        this._critValue = template['critValue'] || 0;
        this._dodgeValue = template['dodgeValue'] || 0;
        this._parryValue = template['parryValue'] || 0;
        this._hitValue = template['hitValue'] || 0;
    },
    getAttackValue: function(slot) {
        var modifier = 0;
        // If we can equip items, then have to take into 
        // consideration weapon and armor
        if (this.hasMixin(Game.EntityMixins.Equipper)) {
            if (this.getItemInSlot(slot)) {
                modifier += this.getItemInSlot(slot).getAttackValue();
            }
        }
        return this._attackValue + modifier;
    },
    getAttackValue: function() {
        return this._attackValue;
    },
    getCritValue: function() {
        return this._critValue;
    },
    getDodgeValue: function() {
        return this._dodgeValue;
    },
    getParryValue: function() {
        return this._parryValue;
    },
    getHitValue: function() {
        return this._hitValue;
    },
    increaseAttackValue: function(value) {
        // If no value was passed, default to 2.
        value = value || 2;
        // Add to the attack value.
        this._attackValue += value;
        Game.sendMessage(this, loc.EntityIncreasedAttackValue);
    },
    attack: function(target) {
        //TODO: I'm sure theres a way to clean this up.
        if (target.hasMixin('Destructible')) {

            var chanceToHit = Math.floor(Math.random(100) * 100) + this.getHitValue();

            Debug.log("Game.EntityMixins.Attacker.attack: Chance to hit against " + target.getName() + "'s dodge chance: " + chanceToHit + "% ( +hit: " + this.getHitValue() +"%) vs " + target.getDodgeValue() + "%");

            if (chanceToHit <= target.getDodgeValue()) {

                Game.sendMessage(this, loc.EntityTheyDodgeAttack, 
                    [target.getName()]);
                Game.sendMessage(target, loc.EntityYouDodgeAttack,
                    [this.getName()]);

            } else {

                if (target == this.getMap().getPlayer() && Debug.noTarget)
                    return;

                //TF2 minicrits.
                //A weapon that won't hit if you don't critically hit.

                var chanceToCrit = Math.floor(Math.random(100) * 100) + this.getCritValue();
                var critRolls = 0;
                var critMultiplier = 1;
                var crit = false;
                var critAgainstChance = 100 - (Math.floor(Math.random(100) * 100));

                Debug.log("Game.EntityMixins.Attacker.attack: Chance to crit: " + chanceToCrit + "% ( +crit:" + this.getCritValue() + "%) vs " + critAgainstChance + "%");

                if (chanceToCrit > critAgainstChance) {
                    if (chanceToCrit > 100) {
                        while(chanceToCrit > 100) {
                            critRolls += 1;
                            chanceToCrit -= 100;
                            Debug.log("Game.EntityMixins.Attacker.attack: critRolls: " + critRolls + "x Crit Left: " + chanceToCrit);
                        }
                    }
                    crit = true;
                    critMultiplier = 2 + critRolls;
                }

                var attack = this.getAttackValue();
                var defense = target.getDefenseValue();
                var max = Math.max(0, attack - defense);
                var damage = (1 + Math.floor(Math.random() * max)) * critMultiplier;

                if (crit) {
                    Game.sendMessage(this, loc.EntityYouAttackCritical, 
                        [target.getName(), damage, critMultiplier]);
                    Game.sendMessage(target, loc.EntityTakeAttackCritical, 
                        [this.getName(), damage, critMultiplier]);
                } else {
                    Game.sendMessage(this, loc.EntityYouAttack, 
                        [target.getName(), damage]);
                    Game.sendMessage(target, loc.EntityTakeAttack, 
                        [this.getName(), damage]);   
                }

                if (Debug.god) {
                    if (target != this.getMap().getPlayer()) {
                        target.takeDamage(this, damage);
                    }
                } else {
                    target.takeDamage(this, damage);
                }
            }   
        }
    },
    listeners: {
        details: function() {
            return [{key: 'attack', value: this.getAttackValue()}];
        }
    }
};