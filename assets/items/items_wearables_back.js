// Wearables
Game.ItemRepository.define(loc.ItemWearablesBackToteName, {
    name: loc.ItemWearablesBackToteName,
    description: loc.ItemWearablesBackToteDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotBack,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesBackPackName, {
    name: loc.ItemWearablesBackPackName,
    description: loc.ItemWearablesBackPackDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'aqua',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotBack,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesBackPackMilName, {
    name: loc.ItemWearablesBackPackMilName,
    description: loc.ItemWearablesBackPackMilDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'aqua',
    defenseValue: 2,
    wearable: true,
    slot: loc.EntityPlayerEquipSlotBack,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
