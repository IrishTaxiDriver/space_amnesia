//FOOD - BIOMES - UNDERGROUND
Game.ItemRepository.define(loc.ItemMushroomName, {
    name: loc.ItemMushroomName,
    description: loc.ItemMushroomDesc,
    habitat: [loc.MapBiomeHabitatUnderground],
    character: '*',
    foreground: 'white',
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemLichenName, {
    name: loc.ItemLichenName,
    description: loc.ItemLichenDesc,
    habitat: [loc.MapBiomeHabitatUnderground],
    character: '*',
    foreground: 'white',
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - ARCTIC
//FOOD - BIOMES - TEMPERATE
Game.ItemRepository.define(loc.ItemAppleName, {
    name: loc.ItemAppleName,
    description: loc.ItemAppleDesc,
    habitat: [loc.MapBiomeHabitatTemporate],
    character: '%',
    foreground: 'red',
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemPumpkinName, {
    name: loc.ItemPumpkinName,
    description: loc.ItemPumpkinDesc,
    habitat: [loc.MapBiomeHabitatTemporate],
    character: '%',
    foreground: 'orange',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable]
});

//FOOD - BIOMES - JUNGLE
Game.ItemRepository.define(loc.ItemMelonName, {
    name: loc.ItemMelonName,
    description: loc.ItemMelonDesc,
    habitat: [loc.MapBiomeHabitatJungle],
    character: '%',
    foreground: 'lightGreen',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - SAVANNAH
Game.ItemRepository.define(loc.ItemOkraName, {
    name: loc.ItemOkraName,
    description: loc.ItemOkraDesc,
    habitat: [loc.MapBiomeHabitatSavannah],
    character: '%',
    foreground: 'lightGreen',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - OCEAN
//FOOD - ANY
Game.ItemRepository.define(loc.ItemMREName, {
    name: loc.ItemMREName,
    description: loc.ItemMREDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '%',
    foreground: 'green',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemSunflowerSeedsName, {
    name: loc.ItemSunflowerSeedsName,
    description: loc.ItemSunflowerSeedsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '%',
    foreground: 'green',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define(loc.EntityCorpse, {
    name: loc.EntityCorpse,
    description: loc.EntityCorpseDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '%',
    foodValue: 75,
    consumptions: 1,
    mixins: [Game.ItemMixins.Edible]
}, {
    disableRandomCreation: true
});