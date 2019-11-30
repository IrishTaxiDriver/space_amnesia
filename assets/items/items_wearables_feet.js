// Wearables
Game.ItemRepository.define(loc.ItemWearablesFeetShoesCrewmansName, {
    name: loc.ItemWearablesFeetShoesCrewmansName,
    description: loc.ItemWearablesFeetShoesCrewmansDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetFlipFlopsName, {
    name: loc.ItemWearablesFeetFlipFlopsName,
    description: loc.ItemWearablesFeetFlipFlopsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 0,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsName, {
    name: loc.ItemWearablesFeetBootsName,
    description: loc.ItemWearablesFeetBootsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsSnowName, {
    name: loc.ItemWearablesFeetBootsSnowName,
    description: loc.ItemWearablesFeetBootsSnowDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsDuckName, {
    name: loc.ItemWearablesFeetBootsDuckName,
    description: loc.ItemWearablesFeetBootsDuckDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsWetName, {
    name: loc.ItemWearablesFeetBootsWetName,
    description: loc.ItemWearablesFeetBootsWetDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsSoldierName, {
    name: loc.ItemWearablesFeetBootsSoldierName,
    description: loc.ItemWearablesFeetBootsSoldierDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});
