Game.Map.cryogenics = function(player) {
    // Call the Map constructor
    Game.Map.call(this, tiles);
    // Add the player
    this.addEntityAtRandomPosition(player, 0);
    // Set the habitat
    this._habitat = loc.MapBiomeHabitatShip;
    // Load the map.
    Game.Builder._loadLevel("http://www.danmerboth.com/games/space_amnesia/cryogenics/cryo_1.txt");


};
Game.Map.cryogenics.extend(Game.Map);