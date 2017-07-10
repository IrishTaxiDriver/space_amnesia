Game.ItemRepository.define(loc.ItemWeaponSwordOfficerName, {
    name: loc.ItemWeaponSwordOfficerName,
    description: loc.ItemWeaponSwordOfficerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '|',
    foreground: 'white',
    attackValue: 1,
    attackType: loc.ItemWeaponAttackTypeSlash,
    wieldable: true,
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
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
    range: 1,
    mixins: [Game.ItemMixins.Equippable]
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
    range: 1,
    components: [loc.ItemWoodScrapName, loc.ItemTapeName],
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Craftable]
}, {
    disableRandomCreation: true
});