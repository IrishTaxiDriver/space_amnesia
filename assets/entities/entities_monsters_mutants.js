Game.EntityRepository.define(loc.EntityFlytrapSmallName, {
    name: loc.EntityFlytrapSmallName,
    class: [loc.EntityClassMutant],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'f',
    foreground: 'green',
    prefix: loc.ItemPrefixLCThe,
    maxHp: 10,
    speed: 250,
    xpValue: 1,
    mixins: [Game.EntityMixins.Destructible, Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntityFlytrapMediumName, {
    name: loc.EntityFlytrapMediumName,
    class: [loc.EntityClassMutant],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'F',
    foreground: 'green',
    prefix: loc.ItemPrefixLCThe,
    maxHp: 10,
    speed: 250,
    xpValue: 1,
    mixins: [Game.EntityMixins.Destructible, Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntityFlytrapLargeName, {
    name: loc.EntityFlytrapLargeName,
    class: [loc.EntityClassMutant],
    habitat: [loc.MapBiomeHabitatNone],
    character: 'F',
    foreground: 'green',
    prefix: loc.ItemPrefixLCThe,
    maxHp: 10,
    speed: 250,
    xpValue: 1,
    mixins: [Game.EntityMixins.Destructible, Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});