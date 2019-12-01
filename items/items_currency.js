Game.ItemRepository.define(loc.ItemCurrencyCreditsName, {
    name: loc.ItemCurrencyCreditsName,
    description: loc.ItemCurrencyCreditsDesc,
    habitat: [loc.MapBiomeHabitatAny],
    character: '$',
    foreground: 'white',
    prefix: loc.ItemPrefixLCA,
    mixins: [Game.ItemMixins.Currency],
    type: loc.ItemCurrencyCreditsName,
    value: 0
});