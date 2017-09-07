// Wearables
Game.ItemRepository.define(loc.ItemWearablesCryoUndiesName, {
    name: loc.ItemWearablesCryoUndiesName,
    description: loc.ItemWearablesCryoUndiesDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '(',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsShortsName, {
    name: loc.ItemWearablesPantsShortsName,
    description: loc.ItemWearablesPantsShortsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsShortsCargoName, {
    name: loc.ItemWearablesPantsShortsCargoName,
    description: loc.ItemWearablesPantsShortsCargoDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsCrewmanName, {
    name: loc.ItemWearablesPantsCrewmanName,
    description: loc.ItemWearablesPantsCrewmanDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsOfficerName, {
    name: loc.ItemWearablesPantsOfficerName,
    description: loc.ItemWearablesPantsOfficerDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsCaptainName, {
    name: loc.ItemWearablesPantsCaptainName,
    description: loc.ItemWearablesPantsCaptainDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesPantsBDUName, {
    name: loc.ItemWearablesPantsBDUName,
    description: loc.ItemWearablesPantsBDUDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotLegs,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});