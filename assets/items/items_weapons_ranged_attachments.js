Game.ItemRepository.define(loc.ItemWeaponAttachmentSilencerName, {
    name: loc.ItemWeaponAttachmentSilencerName,
    description: loc.ItemWeaponAttachmentSilencerDesc,
    habitat: [loc.MapBiomeHabitatNone],
    character: '*',
    foreground: 'white',
    components: [loc.ItemWeaponPipeName,loc.ItemGauzeName],
    mixins: [Game.ItemMixins.Craftable]
});