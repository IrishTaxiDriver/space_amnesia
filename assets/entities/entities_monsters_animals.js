//BIOMES - UNDERGROUND MONSTERS
Game.EntityRepository.define(loc.EntityBatName, {
    name: loc.EntityBatName,
    class: [loc.EntityClassAnimal, loc.EntityClassSubMammal],
    habitat: [loc.MapBiomeHabitatUnderground],
    character: 'b',
    foreground: 'white',
    maxHp: 5,
    attackValue: 4,
    speed: 2000,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor, 
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityNewtName, {
    name: loc.EntityNewtName,
    class: [loc.EntityClassAnimal, loc.EntityClassSubAmphibian],
    habitat: [loc.MapBiomeHabitatUnderground], 
    character: 'n',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityCaveSpiderName, {
    name: loc.EntityCaveSpiderName,
    class: [loc.EntityClassAnimal, loc.EntityClassSubArachnid],
    habitat: [loc.MapBiomeHabitatUnderground], 
    character: 'x',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityCaveBeetleName, {
    name: loc.EntityCaveBeetleName,
    class: [loc.EntityClassAnimal, loc.EntityClassSubInsect],
    habitat: [loc.MapBiomeHabitatUnderground], 
    character: 'x',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

//BIOMES - TEMPERATE MONSTERS

Game.EntityRepository.define(loc.EntityBearBlackName, {
    name: loc.EntityBearBlackName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatTemperate],
    character: 'B',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityBearBrownName, {
    name: loc.EntityBearBrownName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatTemperate],
    character: 'B',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityBearGrizzlyName, {
    name: loc.EntityBearGrizzlyName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatTemperate],
    character: 'B',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityLionMountainName, {
    name: loc.EntityLionMountainName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatTemperate],
    character: 'L',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityTigerSiberianName, {
    name: loc.EntityTigerSiberianName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatTemperate],
    character: 'T',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

//BIOMES - SAVANNAH MONSTERS

Game.EntityRepository.define(loc.EntityLionSavannahName, {
    name: loc.EntityLionSavannahName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatSavannah],
    character: 'L',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityAfricanElephantSavannahName, {
    name: loc.EntityAfricanElephantSavannahName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatSavannah],
    character: 'E',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});
Game.EntityRepository.define(loc.EntityAsianElephantSavannahName, {
    name: loc.EntityAsianElephantSavannahName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatSavannah],
    character: 'E',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

//BIOMES - JUNGLE MONSTERS

Game.EntityRepository.define(loc.EntityCobraName, {
    name: loc.EntityCobraName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatJungle],
    character: 'c',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntityAnacondaName, {
    name: loc.EntityAnacondaName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatJungle],
    character: 'A',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntityBoaConstrictorName, {
    name: loc.EntityBoaConstrictorName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatJungle],
    character: 'b',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

//BIOMES - OCEAN

Game.EntityRepository.define(loc.EntitySharkMakoName, {
    name: loc.EntitySharkMakoName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatOcean],
    character: 's',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntitySharkGreatWhiteName, {
    name: loc.EntitySharkGreatWhiteName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatOcean],
    character: 'S',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntitySharkLandName, {
    name: loc.EntitySharkLandName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatOcean],
    character: 'S',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define(loc.EntitySharkMegalodonName, {
    name: loc.EntitySharkMegalodonName,
    class: [loc.EntityClassAnimal],
    habitat: [loc.MapBiomeHabitatOcean],
    character: 'M',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    xpValue: 1,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker, Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
});