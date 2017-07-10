// Wearables
Game.ItemRepository.define(loc.ItemWearablesChestCryoFilmName, {
    name: loc.ItemWearablesChestCryoFilmName,
    description: loc.ItemWearablesChestCryoFilmDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '(',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesChestShirtCrewmansName, {
    name: loc.ItemWearablesChestShirtCrewmansName,
    description: loc.ItemWearablesChestShirtCrewmansDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesChestShirtOfficersName, {
    name: loc.ItemWearablesChestShirtOfficersName,
    description: loc.ItemWearablesChestShirtOfficersDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesChestShirtCaptainsName, {
    name: loc.ItemWearablesChestShirtCaptainsName,
    description: loc.ItemWearablesChestShirtCaptainsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesChestVestRiotName, {
    name: loc.ItemWearablesChestVestRiotName,
    description: loc.ItemWearablesChestVestRiotDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});