// Weapons
Game.ItemRepository.define(loc.ItemWeaponLaserRifleName, {
    name: loc.ItemWeaponLaserRifleName,
    description: loc.ItemWeaponLaserRifleDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '=',
    foreground: 'white',
    attackValue: 5,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 8,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponCrossBowName, {
    name: loc.ItemWeaponCrossBowName,
    description: loc.ItemWeaponCrossBowDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '=',
    foreground: 'white',
    attackValue: 5,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 8,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponBowHuntingName, {
    name: loc.ItemWeaponBowHuntingName,
    description: loc.ItemWeaponBowHuntingDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '=',
    foreground: 'white',
    attackValue: 5,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 8,
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define(loc.ItemWeaponBowName, {
    name: loc.ItemWeaponBowName,
    description: loc.ItemWeaponBowDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '}',
    foreground: 'white',
    attackValue: 5,
    wieldable: true,
    prefix: loc.ItemPrefixLCA,
    slot: 'hands',
    range: 8,
    components: [loc.ItemIntestinesName, loc.ItemWoodScrapName],
    mixins: [Game.ItemMixins.Equippable,
             Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemRarity]
}, {
    disableRandomCreation: true
});