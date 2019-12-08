Game.ItemRepository.define(loc.ItemMedicineBandageName, {
    name: loc.ItemMedicineBandageName,
    description: loc.ItemMedicineBandageDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCA,
    components: [loc.ItemPlantExtractsName,loc.ItemGauzeName],
    mixins: [Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemCore]
});

Game.ItemRepository.define(loc.ItemMedicineAntibioticsName, {
    name: loc.ItemMedicineAntibioticsName,
    description: loc.ItemMedicineAntibioticsDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCAn,
    components: [],
    mixins: [Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemCore]
});

Game.ItemRepository.define(loc.ItemMedicineDisinfectantName, {
    name: loc.ItemMedicineDisinfectantName,
    description: loc.ItemMedicineDisinfectantDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCA,
    components: [],
    mixins: [Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemCore]
});

Game.ItemRepository.define(loc.ItemMedicineAspirinName, {
    name: loc.ItemMedicineAspirinName,
    description: loc.ItemMedicineAspirinDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCAn,
    components: [],
    mixins: [Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemCore]
});

Game.ItemRepository.define(loc.ItemMedicineAntacidName, {
    name: loc.ItemMedicineAntacidName,
    description: loc.ItemMedicineAntacidDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    prefix: loc.ItemPrefixLCAn,
    components: [],
    mixins: [Game.ItemMixins.Craftable,
             Game.ItemMixins.ItemCore]
});