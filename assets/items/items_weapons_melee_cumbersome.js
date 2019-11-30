// Weapons
Game.ItemRepository.define(loc.ItemWeaponLargePipeName, {
    name: loc.ItemWeaponLargePipeName,
    description: loc.ItemWeaponLargePipeDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '/',
    foreground: 'gray',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 2,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponSledgehammerName, {
    name: loc.ItemWeaponSledgehammerName,
    description: loc.ItemWeaponSledgehammerDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '/',
    foreground: 'gray',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hand',
    range: 2,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponSpearName, {
    name: loc.ItemWeaponSpearName,
    description: loc.ItemWeaponSpearDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '|',
    foreground: 'white',
    attackValue: 3,
    attackType: loc.ItemWeaponAttackTypeThrust,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    range: 2,
    components: [loc.ItemWoodScrapName, loc.ItemTapeName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponPolearmName, {
    name: loc.ItemWeaponPolearmName,
    description: loc.ItemWeaponPolearmDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '|',
    foreground: 'white',
    attackValue: 4,
    attackType: loc.ItemWeaponAttackTypeThrust,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    range: 2,
    components: [loc.ItemWoodScrapName, loc.ItemTapeName, loc.ItemWeaponBoxcutterName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});