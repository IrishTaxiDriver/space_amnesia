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
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
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
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponWrenchName, {
    name: loc.ItemWeaponWrenchName,
    description: loc.ItemWeaponWrenchDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '-',
    foreground: 'white',
    attackValue: 2,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    slot: 'hand',
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});