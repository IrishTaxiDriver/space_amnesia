Game.ItemRepository.define(loc.ItemQuestGymTowelName, {
    name: loc.ItemQuestGymTowelName,
    description: loc.ItemQuestGymTowelDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '*',
    foreground: 'white',
    mixins: [Game.ItemMixins.ItemCore]
});