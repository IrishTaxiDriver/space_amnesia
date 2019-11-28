Game.Loader = function(width, height, path) {
    this._width = width;
    this._height = height;
    this._tiles = this._loadLevel(path);
};

Game.Loader.prototype.getTiles = function () {
    return this._tiles;
};
Game.Loader.prototype.getWidth = function () {
    return this._width;
};
Game.Loader.prototype.getHeight = function () {
    return this._height;
};
Game.Loader.prototype._loadLevel = function(path) {
    // Create the empty map
    var map = new Array(this._width);
    for (var w = 0; w < this._width; w++) {
        map[w] = new Array(this._height);
    }
    //Read in the mapfile.
    var myFetch = fetch(firm.URL + path);
    myFetch.then(function(response) {
        response.text().then(function(text) {
            var lines = text.split('\n');
            for (var x = 0; x < this._width; x++) {
                for (var y = 0; y < this._height; y++) {
                    map[x][y] = this._lookupTile(lines[x].charAt(0));
                    if (lines[x].length != 0)
                        lines[x].shift();
                }
            }
        });
    });

    //Return the map.
    return map;
};