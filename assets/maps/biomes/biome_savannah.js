Game.Map.biome_savannah = function(tiles, player) {
    // Call the Map constructor
    Game.Map.call(this, tiles);
    // Add the player
    this.addEntityAtRandomPosition(player, 0);
    // Set the habitat
    this._habitat = loc.MapBiomeHabitatSavannah;
    // Add random entities and items to each floor.
    this.populateEntities(15, this._habitat);
    // 15 items per floor
    this.populateItems(15, this._habitat);
        
    // 1 container per floor
    this.addContainer();
};
Game.Map.biome_savannah.extend(Game.Map);