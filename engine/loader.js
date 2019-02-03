Game.Loader = function(width, height) {
    this._width = width;
    this._height = height;
    this._depth = depth;
    this._tiles = new Array(depth);
    this._regions = new Array(depth);
    // Instantiate the arrays to be multi-dimension
    for (var z = 0; z < depth; z++) {
        // Create a new cave at each level
        this._tiles[z] = this._loadLevel();
        // Setup the regions array for each depth
        this._regions[z] = new Array(width);
        for (var x = 0; x < width; x++) {
            this._regions[z][x] = new Array(height);
            // Fill with zeroes
            for (var y = 0; y < height; y++) {
                this._regions[z][x][y] = 0;
            }
        }
    }
    for (var z = 0; z < this._depth; z++) {
        this._setupRegions(z);
    }
    this._connectAllRegions();
};

Game.Loader.prototype.getTiles = function () {
    return this._tiles;
};
Game.Loader.prototype.getDepth = function () {
    return this._depth;
};
Game.Loader.prototype.getWidth = function () {
    return this._width;
};
Game.Loader.prototype.getHeight = function () {
    return this._height;
};

Game.Loader.prototype._loadLevel = function(url) {
    // Create the empty map
    var map = new Array(this._width);
    for (var w = 0; w < this._width; w++) {
        map[w] = new Array(this._height);
    }
    //Read in the mapfile.
    var myFetch = fetch(url);
    myFetch.then(function(response) {
        response.text().then(function(text) {
            var lines = text.split('\n');
            for (var x = 0; x < this._width; x++) {
                for (var y = 0; y < this._height; y++) {
                    map[x][y] = this._lookupTile(lines.charAt(h));
                }
            }
        });
    });

    //Return the map.
    return map;
};