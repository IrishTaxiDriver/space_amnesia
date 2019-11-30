// Wearables
// Cryofilm (start the game wearing this.)
Game.ItemRepository.define(loc.ItemWearablesChestCryoFilmName, {
    name: loc.ItemWearablesChestCryoFilmName,
    description: loc.ItemWearablesChestCryoFilmDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '(',
    foreground: 'white',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixLCThe,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

//T-shirt
Game.ItemRepository.define(loc.ItemWearablesChestShirtTeeName, {
    name: loc.ItemWearablesChestShirtTeeName,
    description: loc.ItemWearablesChestShirtTeeDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Tank Top
Game.ItemRepository.define(loc.ItemWearablesChestShirtTankName, {
    name: loc.ItemWearablesChestShirtTankName,
    description: loc.ItemWearablesChestShirtTankDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Henley
Game.ItemRepository.define(loc.ItemWearablesChestShirtHenleyName, {
    name: loc.ItemWearablesChestShirtHenleyName,
    description: loc.ItemWearablesChestShirtHenleyDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Crewman's Shirt
Game.ItemRepository.define(loc.ItemWearablesChestShirtCrewmansName, {
    name: loc.ItemWearablesChestShirtCrewmansName,
    description: loc.ItemWearablesChestShirtCrewmansDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Officer's Shirt
Game.ItemRepository.define(loc.ItemWearablesChestShirtOfficersName, {
    name: loc.ItemWearablesChestShirtOfficersName,
    description: loc.ItemWearablesChestShirtOfficersDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Captain's Shirt
Game.ItemRepository.define(loc.ItemWearablesChestShirtCaptainsName, {
    name: loc.ItemWearablesChestShirtCaptainsName,
    description: loc.ItemWearablesChestShirtCaptainsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

//Riot Vest
Game.ItemRepository.define(loc.ItemWearablesChestVestRiotName, {
    name: loc.ItemWearablesChestVestRiotName,
    description: loc.ItemWearablesChestVestRiotDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotChest,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});