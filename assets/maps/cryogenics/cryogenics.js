Game.Map.Cryogenics = function(player) {
    // Call the Map constructor
    Game.Map.call(this, this._loadLevel( firm.URL + "cryogenics/cryo_1.txt"));
    // Set the habitat
    this._habitat = loc.MapBiomeHabitatShip;
    
    // Add the player
    this.addEntityAtRandomPosition(player, 0);
};
Game.Map.Cryogenics.extend(Game.Map);

// Game.Map.Cryogenics.prototype._loadLevel(url) {
//     Game.Loader._loadLevel(url);
// };
Game.Map.Cryogenics.prototype.addEntity = function(entity) {
    // Call super method.
    Game.Map.prototype.addEntity.call(this, entity);
    // If it's a player, place at random position
    if (this.getPlayer() === entity) {
        var position = this.getRandomFloorPosition(0);
        entity.setPosition(position.x, position.y, 0);
        // Start the engine!
        this.getEngine().start();
    }
};
