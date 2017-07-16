// Player template
Game.PlayerTemplate = {
    name: loc.EntityPlayerName,
    character: '@',
    foreground: 'white',
    maxHp: 40,
    attackValue: 10,
    defenseValue: 0,
    sightRadius: 6,
    inventorySlots: 10,
    class: [loc.EntityClassHumanoid],
    habitat: [],
    mixins: [Game.EntityMixins.PlayerActor,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Currency,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.InventoryHolder,
             Game.EntityMixins.FoodConsumer,
             Game.EntityMixins.Sight,
             Game.EntityMixins.MessageRecipient,
             Game.EntityMixins.Equipper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.PlayerStatGainer]
};