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
    _debug: false,
    isFunction: function(functionName) {
        return typeof(functionName) === typeof(Function);
    },
    debug: function(msg) {
        if (this._debug) {
                console.log(msg);
        }
    },
    spawn: function(key, value, type) {
        if (this._debug) {

            Util.debug("Util.spawn: Trying to spawn: " + value );

            if (type == "entity") {
                repo = Game.EntityRepository;
            } else if (type == "item") {
                repo = Game.ItemRepository;
            }

            Util.debug("Util.spawn: Using " + repo._name + "repository.");

            var player = Game._currentScreen._player;
            var map = player.getMap();

            map.addItem(player.getX(), player.getY(), player.getZ(),
                repo.create( Object.keys( repo.getFromCriteria( key, value ) ) ) );

            //Game.refresh();

            Util.debug("Util.spawn: Spawned: " + value);
        }
    }
};
