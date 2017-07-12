Game.Map.biome_underground = function(tiles, player) {
    // Call the Map constructor
    Game.Map.call(this, tiles);
    // Add the player
    this.addEntityAtRandomPosition(player, 0);
    // Set the habitat
    this._habitat = loc.MapBiomeHabitatUnderground;
    // Add random entities and items to each floor.
    for (var z = 0; z < this._depth; z++) {
        // 15 entities per floor
        for (var i = 0; i < 15; i++) {
            var entity = Game.EntityRepository.createRandomFromCriteria("habitat", this._habitat);
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
            var item = Game.ItemRepository.createRandomFromCriteria("habitat", this._habitat);
            // Add a random item for the habitat
            this.addItemAtRandomPosition(item, z);
        }
        
        // 1 container per floor
        var container = Game.EntityRepository.createRandomFromCriteria("class", loc.EntityClassContainer);
        container.populateContainerWithRandomCount(5);
        this.addEntityAtRandomPosition(container, z);
    }
};
Game.Map.biome_underground.extend(Game.Map);