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
    }
};
