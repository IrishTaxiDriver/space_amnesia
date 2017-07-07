// Weapons
Game.ItemRepository.define(loc.ItemWeaponAntiRiotGunName, {
    name: loc.ItemWeaponAntiRiotGunName,
    description: loc.ItemWeaponAntiRiotGunDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: ')',
    foreground: 'gray',
    attackValue: 3,
    wieldable: true,
    slot: 'hand',
    range: 3,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponLaserPistolName, {
    name: loc.ItemWeaponLaserPistolName,
    description: loc.ItemWeaponLaserPistolDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: ')',
    foreground: 'gray',
    attackValue: 4,
    wieldable: true,
    slot: 'hand',
    range: 5,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
