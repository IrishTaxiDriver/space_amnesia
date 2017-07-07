Game.ItemRepository.define(loc.ItemBandageName, {
    name: loc.ItemBandageName,
    description: loc.ItemBandageDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [loc.ItemPlantExtractsName,loc.ItemGauzeName],
    mixins: [Game.ItemMixins.Craftable]
});