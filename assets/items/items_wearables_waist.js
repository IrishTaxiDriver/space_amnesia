// Wearables
Game.ItemRepository.define(loc.ItemWearablesWaistBeltName, {
    name: loc.ItemWearablesWaistBeltName,
    description: loc.ItemWearablesWaistBeltDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotWaist,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesWaistFannyPackName, {
    name: loc.ItemWearablesWaistFannyPackName,
    description: loc.ItemWearablesWaistFannyPackDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotWaist,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});