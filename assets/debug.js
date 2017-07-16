//TODO: Change teleportTo to find the first clear space closest to the entity.
//TODO: Change spawn to allow for random placement and whatever else I think of.
//TODO: Notarget means they don't attack you as well.
var Debug = {
    enable: false,
    sated: false,
    god: false,
    notarget: false,
    clearFog: false,
    log: function(msg) {
        if (this.enable) {
                console.log(msg);
        }
    },
    getPlayer: function() {
        return Game._currentScreen._player;
    },
    getMap: function() {
        return Debug.getPlayer().getMap();
    },
    toggle: function(state) {
        if (Debug.enable)
            Debug.enable = false;
        else
            Debug.enable = true;
    },
    toggleSated: function(state) {
        if (!Debug.enable)
            return;

        if (Debug.sated)
            Debug.sated = false;
        else
            Debug.sated = true;
    },
    toggleGod: function(state) {
        if (!Debug.enable)
            return;

        if (Debug.god)
            Debug.god = false;
        else
            Debug.god = true;
    },
    toggleNoTarget: function(state) {
        if (!Debug.enable)
            return;

        if (Debug.notarget)
            Debug.notarget = false;
        else
            Debug.notarget = true;
    },
    toggleClearFog: function(state) {
        if (!Debug.enable)
            return;

        if (Debug.clearFog)
            Debug.clearFog = false;
        else
            Debug.clearFog = true;
    },
    toggleEverything: function() {
        if (!Debug.enable)
            return;

        Debug.toggleSated();
        Debug.toggleGod();
        Debug.toggleNoTarget();
        Debug.toggleClearFog();
        Debug.allExplored();

        Debug.giveExperience(100000);
    },
    giveExperience: function(points) {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        player.giveExperience(points);
        Debug.log("Debug.giveExperience: Player given " + points + " experience.");
    },
    giveCurrency: function(type, amount) {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        player.addCurrencyToType(type, amount);
        Debug.log("Debug.giveCredits: Player given: " + amount + " " + type);
    },
    giveNextLevel: function() {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        var points = player.getNextLevelExperience() - player._experience;
        player.giveExperience(points);
        Debug.log("Debug.giveNextLevel: Player given next level.");
    },
    givePlayerMaxHealth: function() {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        player.setHP(player.getMaxHp());
        Debug.log("Debug.givePlayerMaxHealth: Player health set to max.");
    },
    resetPlayerHunger: function() {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        player.modifyFullnessBy(player._maxFullness - player._fullness);
        Debug.log("Debug.resetPlayerHunger: Player hunger reset.");
    },
    //Explores all tiles.
    allExplored: function() {
        if (!Debug.enable)
            return;

        var player = Debug.getPlayer();
        var map = Debug.getMap();

        for (var z = 0; z < map._depth; z++) {
            for (var x = 0; x < map._width; x++) {
                for (var y = 0; y < map._height; y++) {
                    map.setExplored(x,y,z,true);
                }
            }
        }

        Game.refresh();

        Debug.log("Debug.allExplored: All tiles explored.");
    },
    teleportTo: function(name) {
        if (!Debug.enable)
            return;

        Debug.log("Debug.teleportTo: Trying to teleport to: " + name );
        var player = Debug.getPlayer();
        var map = Debug.getMap();

        var target = null;

        for (coords in map._entities) {
            if (map._entities[coords]._name == name && map._entities[coords]._z == player._z) {
                target = map._entities[coords];
            }
        }

        if (target) {
            player.setPosition(target.getX() - 1, target.getY() - 1, target._z);
        } else {
            Debug.log("Debug.teleportTo: Target " + name + " not found." );
        }

        Game.refresh();

    },
    spawn: function(name) {
        if (!Debug.enable)
            return;

        Debug.log("Debug.spawn: Trying to spawn: " + name );

        var player = Debug.getPlayer();
        var map = Debug.getMap();

        if (Game.EntityRepository.getContainingRepository("name", name)) {
            Debug.log("Debug.spawn: Using entity repository.");
            var entity = Game.EntityRepository.create( Object.keys( Game.EntityRepository.getFromCriteria( "name", name ) ) );
            entity.setX(player.getX() - 1);
            entity.setY(player.getY() - 1);
            entity.setZ(player.getZ());
            //must set xyz of entity.
            map.addEntity( entity );
        } else {
            Debug.log("Debug.spawn: Using item repository.");
            item = Game.ItemRepository.create( Object.keys( Game.ItemRepository.getFromCriteria( "name", name ) ) );
            if (item.hasMixin(Game.ItemMixins.Currency)) {
                item.randomizeValue(100);
            }
            map.addItem( player.getX(), player.getY(), player.getZ(), item);
        }

        Debug.log("Debug.spawn: Spawned: " + name);
    }
};
