Game.Map.biome_savannah = function(tiles, player) {
    // Call the Map constructor
    Game.Map.call(this, tiles);
    // Add the player
    this.addEntityAtRandomPosition(player, 0);
    // Set the habitat
    this._habitat = loc.MapBiomeHabitatSavannah;
    // Add random entities and items to each floor.
    for (var z = 0; z < this._depth; z++) {
        // 15 entities per floor
        for (var i = 0; i < 15; i++) {
            var entity = Game.EntityRepository.createRandom();
            // Add a random entity
            this.addEntityAtRandomPosition(entity, z);
            // Level up the entity based on the floor
            if (entity.hasMixin('ExperienceGainer')) {
                for (var level = 0; level < z; level++) {
                    entity.giveExperience(entity.getNextLevelExperience() -
                        entity.getExperience());
                }
            }
        }
        // 15 items per floor
        for (var i = 0; i < 15; i++) {
            // Add a random entity
            this.addItemAtRandomPosition(Game.ItemRepository.createRandom(), z);
        }
    }
    // Add weapons and armor to the map in random positions and floors
    // var templates = ['dagger', 'sword', 'staff', 
    //     'tunic', 'chainmail', 'platemail'];
    // for (var i = 0; i < templates.length; i++) {
    //     this.addItemAtRandomPosition(Game.ItemRepository.create(templates[i]),
    //         Math.floor(this._depth * Math.random()));
    // }
};
Game.Map.biome_savannah.extend(Game.Map);