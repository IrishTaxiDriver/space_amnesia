// Weapons
Game.ItemRepository.define(loc.ItemWeaponFlamethrowerName, {
    name: loc.ItemWeaponFlamethrowerName,
    description: loc.ItemWeaponFlamethrowerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '=',
    foreground: 'white',
    attackValue: 10,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 5,
    components: [loc.ItemWeaponPipeName, loc.ItemWeaponPipeName,
    			loc.ItemPlantExtractsName, loc.ItemBottleName,
    			loc.ItemWeaponLaserPistolName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponRocketLauncherName, {
    name: loc.ItemWeaponRocketLauncherName,
    description: loc.ItemWeaponRocketLauncherDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '=',
    foreground: 'white',
    attackValue: 10,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 5,
    components: [loc.ItemWeaponPipeName, loc.ItemWeaponMTSName,
    			loc.ItemWeaponLaserRifleName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});