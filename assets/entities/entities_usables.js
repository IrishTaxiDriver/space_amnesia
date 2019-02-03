Game.EntityRepository.define(loc.ItemUsableDryerName, {
    name: loc.ItemUsableDryerName,
    description: loc.ItemUsableDryerDesc,
    class: [loc.EntityClassUsable],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'O',
    foreground: 'white',
    mixins: [Game.EntityMixins.Usable]
});