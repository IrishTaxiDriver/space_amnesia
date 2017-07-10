Game.ItemRepository.define(loc.ItemWeaponThrowableMolotovName, {
    name: loc.ItemWeaponThrowableMolotovName,
    description: loc.ItemWeaponThrowableMolotovDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '-',
    foreground: 'white',
    components: [loc.ItemPlantExtractsName, loc.ItemGauzeName, loc.ItemBottleName],
    mixins: [Game.ItemMixins.Craftable]
});