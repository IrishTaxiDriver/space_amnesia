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
    log: function(msg) {
        if (this.enable) {
                console.log(msg);
        }
    },
    spawn: function(name) {
        if (this.enable) {
            Debug.log("Debug.spawn: Trying to spawn: " + name );

            var player = Game._currentScreen._player;
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
