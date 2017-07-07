// Wearables
Game.ItemRepository.define(loc.ItemWearablesFeetShoesCrewmansName, {
    name: loc.ItemWearablesFeetShoesCrewmansName,
    description: loc.ItemWearablesFeetShoesCrewmansDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesFeetBootsSoldierName, {
    name: loc.ItemWearablesFeetBootsSoldierName,
    description: loc.ItemWearablesFeetBootsSoldierDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'aqua',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotFeet,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
