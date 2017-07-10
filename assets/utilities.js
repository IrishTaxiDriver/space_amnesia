Game.extend = function(src, dest) {
    // Create a copy of the source.
    var result = {};
    for (var key in src) {
        result[key] = src[key];
    }
    // Copy over all keys from dest
    for (var key in dest) {
        result[key] = dest[key];
    }
    return result;
};

var Util = {
    isFunction: function(functionName) {
        return typeof(functionName) === typeof(Function);
    }
};

var Debug = {
    enable: false,
    sated: false,
    god: false,
    notarget: false,
    log: function(msg) {
        if (this.enable) {
                console.log(msg);
        }
    },
    getPlayer: function() {
        return Game._currentScreen._player;
    },
    giveExperience: function(points) {
        var player = Debug.getPlayer();
        player.giveExperience(points);
        Debug.log("Debug.giveExperience: Player given" + points + " experience.");
    },
    giveNextLevel: function() {
        var player = Debug.getPlayer();
        var points = player.getNextLevelExperience() - player._experience;
        player.giveExperience(points);
        Debug.log("Debug.giveNextLevel: Player given next level.");
    },
    givePlayerMaxHealth: function() {
        var player = Debug.getPlayer();
        player.setHP(player.getMaxHp());
        Debug.log("Debug.givePlayerMaxHealth: Player health set to max.");
    },
    resetPlayerHunger: function() {
        var player = Debug.getPlayer();
        player.modifyFullnessBy(player._maxFullness - player._fullness);
        Debug.log("Debug.resetPlayerHunger: Player hunger reset.");
    },
    spawn: function(name) {
        if (this.enable) {
            Debug.log("Debug.spawn: Trying to spawn: " + name );

            var player = Debug.getPlayer();
            var map = player.getMap();

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
                map.addItem( player.getX(), player.getY(), player.getZ(),
                    Game.ItemRepository.create( 
                        Object.keys(
                            Game.ItemRepository.getFromCriteria( "name", name ) ) ) );
            }

            Debug.log("Debug.spawn: Spawned: " + name);
        }
    }
};
