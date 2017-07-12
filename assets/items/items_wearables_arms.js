// Wearables
Game.ItemRepository.define(loc.ItemWearablesHandsGlovesName, {
    name: loc.ItemWearablesHandsGlovesName,
    description: loc.ItemWearablesHandsGlovesDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotHands,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHandsGlovesWelderName, {
    name: loc.ItemWearablesHandsGlovesWelderName,
    description: loc.ItemWearablesHandsGlovesWelderDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotHands,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
