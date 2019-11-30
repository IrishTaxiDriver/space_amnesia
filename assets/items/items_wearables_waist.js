// Wearables
Game.ItemRepository.define(loc.ItemWearablesWaistBeltName, {
    name: loc.ItemWearablesWaistBeltName,
    description: loc.ItemWearablesWaistBeltDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotWaist,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesWaistFannyPackName, {
    name: loc.ItemWearablesWaistFannyPackName,
    description: loc.ItemWearablesWaistFannyPackDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotWaist,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});