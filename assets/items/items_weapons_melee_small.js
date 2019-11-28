// Weapons
Game.ItemRepository.define(loc.ItemWeaponPipeName, {
    name: loc.ItemWeaponPipeName,
    description: loc.ItemWeaponPipeDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Rarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponNightstickName, {
    name: loc.ItemWeaponNightstickName,
    description: loc.ItemWeaponNightstickDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponBoxcutterName, {
    name: loc.ItemWeaponBoxcutterName,
    description: loc.ItemWeaponBoxcutterDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeSlash,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponWrenchPlumberName, {
    name: loc.ItemWeaponWrenchPlumberName,
    description: loc.ItemWeaponWrenchPlumberDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponWrenchCrescentName, {
    name: loc.ItemWeaponWrenchCrescentName,
    description: loc.ItemWeaponWrenchCrescentDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponWrenchMonkeyName, {
    name: loc.ItemWeaponWrenchMonkeyName,
    description: loc.ItemWeaponWrenchMonkeyDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponWrenchPipeName, {
    name: loc.ItemWeaponWrenchPipeName,
    description: loc.ItemWeaponWrenchPipeDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponHammerName, {
    name: loc.ItemWeaponHammerName,
    description: loc.ItemWeaponHammerDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponMalletName, {
    name: loc.ItemWeaponMalletName,
    description: loc.ItemWeaponMalletDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponHatchetName, {
    name: loc.ItemWeaponHatchetName,
    description: loc.ItemWeaponHatchetDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponScrewdriverName, {
    name: loc.ItemWeaponScrewdriverName,
    description: loc.ItemWeaponScrewdriverDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeThrust,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});