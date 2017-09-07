Game.ItemRepository.define(loc.ItemAmmoArrowsName, {
    name: loc.ItemAmmoArrowsName,
    description: loc.ItemAmmoArrowsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '*',
    foreground: 'white',
    components: [loc.ItemWoodScrapName,loc.ItemPillowFeathersName],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemAmmoRocketsName, {
    name: loc.ItemAmmoRocketsName,
    description: loc.ItemAmmoRocketsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [loc.ItemWeaponPipeName,loc.ItemPlantExtractsName,
    			loc.ItemFuseName],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemAmmoSmallBulletsName, {
    name: loc.ItemAmmoSmallBulletsName,
    description: loc.ItemAmmoSmallBulletsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemAmmoLargeBulletsName, {
    name: loc.ItemAmmoLargeBulletsName,
    description: loc.ItemAmmoLargeBulletsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemAmmoShellsName, {
    name: loc.ItemAmmoShellsName,
    description: loc.ItemAmmoShellsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [],
    mixins: [Game.ItemMixins.Craftable]
});

Game.ItemRepository.define(loc.ItemAmmoSlugShellsName, {
    name: loc.ItemAmmoSlugShellsName,
    description: loc.ItemAmmoSlugShellsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [],
    mixins: [Game.ItemMixins.Craftable]
});