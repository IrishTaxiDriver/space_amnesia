//FOOD - BIOMES - UNDERGROUND
Game.ItemRepository.define(loc.ItemFoodMushroomName, {
    name: loc.ItemFoodMushroomName,
    description: loc.ItemFoodMushroomDesc,
    habitat: [loc.MapBiomeHabitatUnderground],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCA,
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemFoodLichenName, {
    name: loc.ItemFoodLichenName,
    description: loc.ItemFoodLichenDesc,
    habitat: [loc.MapBiomeHabitatUnderground],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCA,
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - ARCTIC
//FOOD - BIOMES - TEMPERATE
Game.ItemRepository.define(loc.ItemFoodAppleName, {
    name: loc.ItemFoodAppleName,
    description: loc.ItemFoodAppleDesc,
    habitat: [loc.MapBiomeHabitatTemporate],
    character: '%',
    foreground: 'red',
    prefix: loc.ItemPrefixLCAn,
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemFoodPumpkinName, {
    name: loc.ItemFoodPumpkinName,
    description: loc.ItemFoodPumpkinDesc,
    habitat: [loc.MapBiomeHabitatTemporate],
    character: '%',
    foreground: 'orange',
    prefix: loc.ItemPrefixLCA,
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable]
});

//FOOD - BIOMES - JUNGLE
Game.ItemRepository.define(loc.ItemFoodMelonName, {
    name: loc.ItemFoodMelonName,
    description: loc.ItemFoodMelonDesc,
    habitat: [loc.MapBiomeHabitatJungle],
    character: '%',
    foreground: 'lightGreen',
    prefix: loc.ItemPrefixLCA,
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - SAVANNAH
Game.ItemRepository.define(loc.ItemFoodOkraName, {
    name: loc.ItemFoodOkraName,
    description: loc.ItemFoodOkraDesc,
    habitat: [loc.MapBiomeHabitatSavannah],
    character: '%',
    foreground: 'lightGreen',
    prefix: loc.ItemPrefixLCAn,
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - BIOMES - OCEAN
//FOOD - ANY
Game.ItemRepository.define(loc.ItemFoodMREName, {
    name: loc.ItemFoodMREName,
    description: loc.ItemFoodMREDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '%',
    foreground: 'green',
    prefix: loc.ItemPrefixLCAn,
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});
Game.ItemRepository.define(loc.ItemFoodSunflowerSeedsName, {
    name: loc.ItemFoodSunflowerSeedsName,
    description: loc.ItemFoodSunflowerSeedsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '%',
    foreground: 'green',
    prefix: loc.ItemPrefixLCA,
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

//FOOD - Corpse
Game.ItemRepository.define(loc.EntityCorpse, {
    name: loc.EntityCorpse,
    description: loc.EntityCorpseDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '%',
    prefix: loc.ItemPrefixLCA,
    foodValue: 75,
    consumptions: 1,
    mixins: [Game.ItemMixins.Edible]
}, {
    disableRandomCreation: true
});