Game.ItemRepository.define(loc.ItemArrowsName, {
    name: loc.ItemArrowsName,
    description: loc.ItemArrowsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '*',
    foreground: 'white',
    components: [loc.ItemWoodScrapName,loc.ItemPillowFeathersName],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemRocketsName, {
    name: loc.ItemRocketsName,
    description: loc.ItemRocketsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [loc.ItemWeaponPipeName,loc.ItemPlantExtractsName,
    			loc.ItemFuseName],
    mixins: [Game.ItemMixins.Craftable]
});