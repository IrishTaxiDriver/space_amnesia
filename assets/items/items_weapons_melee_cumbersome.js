// Weapons
Game.ItemRepository.define(loc.ItemWeaponLargePipeName, {
    name: loc.ItemWeaponLargePipeName,
    description: loc.ItemWeaponLargePipeDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: ')',
    foreground: 'gray',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeStrike,
    wieldable: true,
    slot: 'hand',
    range: 2,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});