// Wearables
Game.ItemRepository.define(loc.ItemWearablesHeadGogglesName, {
    name: loc.ItemWearablesHeadGogglesName,
    description: loc.ItemWearablesHeadGogglesDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'aqua',
    defenseValue: 1,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadHatCrewmansName, {
    name: loc.ItemWearablesHeadHatCrewmansName,
    description: loc.ItemWearablesHeadHatCrewmansDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 2,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadHatOfficersName, {
    name: loc.ItemWearablesHeadHatOfficersName,
    description: loc.ItemWearablesHeadHatOfficersDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 3,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadHatCaptainsName, {
    name: loc.ItemWearablesHeadHatCaptainsName,
    description: loc.ItemWearablesHeadHatCaptainsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '(',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadShieldWeldersName, {
    name: loc.ItemWearablesHeadShieldWeldersName,
    description: loc.ItemWearablesHeadShieldWeldersDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadHelmetRiotName, {
    name: loc.ItemWearablesHeadHelmetRiotName,
    description: loc.ItemWearablesHeadHelmetRiotDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    prefix: loc.ItemPrefixLCA,
    slot: loc.EntityPlayerEquipSlotHead,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWearablesHeadXRayGogglesName, {
    name: loc.ItemWearablesHeadXRayGogglesName,
    description: loc.ItemWearablesHeadXRayGogglesDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    prefix: loc.ItemPrefixPair,
    slot: loc.EntityPlayerEquipSlotHead,
    components: [loc.ItemWearablesHeadGogglesName, loc.ItemMTSName,
                loc.ItemMagnetName, loc.ItemMetalScrapName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});