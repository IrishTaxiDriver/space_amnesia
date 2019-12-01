Game.ItemRepository.define(loc.ItemWeaponSwordOfficerName, {
    name: loc.ItemWeaponSwordOfficerName,
    description: loc.ItemWeaponSwordOfficerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '|',
    foreground: 'white',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeSlash,
    wieldable: true,
    prefix: loc.ItemPrefixLCAn,
    range: 1,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponSwordCaptainName, {
    name: loc.ItemWeaponSwordCaptainName,
    description: loc.ItemWeaponSwordCaptainDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '|',
    foreground: 'white',
    attackValue: 3,
    attackType: loc.ItemWeaponAttackTypeSlash,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    range: 1,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponCrowbarName, {
    name: loc.ItemWeaponCrowbarName,
    description: loc.ItemWeaponCrowbarDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '|',
    foreground: 'white',
    attackValue: 3,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    range: 1,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponFireaxeName, {
    name: loc.ItemWeaponFireaxeName,
    description: loc.ItemWeaponFireaxeDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '|',
    foreground: 'white',
    attackValue: 3,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    range: 1,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});