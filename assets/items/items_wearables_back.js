// Wearables
Game.ItemRepository.define(loc.ItemWearablesBackToteName, {
    name: loc.ItemWearablesBackToteName,
    description: loc.ItemWearablesBackToteDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotBack,
    inventorySlots: 4,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesBackPackName, {
    name: loc.ItemWearablesBackPackName,
    description: loc.ItemWearablesBackPackDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotBack,
    inventorySlots: 8,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesBackPackMilName, {
    name: loc.ItemWearablesBackPackMilName,
    description: loc.ItemWearablesBackPackMilDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotBack,
    inventorySlots: 12,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});
