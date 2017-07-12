Game.EntityRepository.define(loc.ItemContainerLockerName, {
    name: loc.ItemContainerLockerName,
    description: loc.ItemContainerLockerDesc,
    class: [loc.EntityClassContainer],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'O',
    foreground: 'white',
    mixins: [Game.EntityMixins.Container]
});

Game.EntityRepository.define(loc.ItemContainerFootLockerName, {
    name: loc.ItemContainerFootLockerName,
    description: loc.ItemContainerFootLockerDesc,
    class: [loc.EntityClassContainer],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'O',
    foreground: 'white',
    mixins: [Game.EntityMixins.Container]
});

Game.EntityRepository.define(loc.ItemContainerTrunkName, {
    name: loc.ItemContainerTrunkName,
    description: loc.ItemContainerTrunkDesc,
    class: [loc.EntityClassContainer],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'O',
    foreground: 'white',
    mixins: [Game.EntityMixins.Container]
});