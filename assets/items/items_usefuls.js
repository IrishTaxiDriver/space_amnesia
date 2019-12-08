Game.ItemRepository.define(loc.ItemHandChargerName, {
    name: loc.ItemHandChargerName,
    description: loc.ItemHandChargerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    mixins: [Game.ItemMixins.ItemCore]
});

Game.ItemRepository.define(loc.ItemWristComputerName, {
    name: loc.ItemWristComputerName,
    description: loc.ItemWristComputerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    mixins: [Game.ItemMixins.ItemCore]
});