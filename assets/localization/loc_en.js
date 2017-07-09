var loc = {
	NotSupport : "The rot.js library isn't supported by your browser.",

	//START SCREEN
	StartScreenEnter : "Entered start screen.",
	StartScreenExit : "Exited start screen.",
	StartScreenGameTitle : "%c{yellow}Javascript Roguelike",
	StartScreenGameDesc : "Press [Enter] to start!",

	//PLAY SCREEN
	PlayScreenExit : "Exited play screen.",

	//INVENTORY SCREEN
	InventoryScreenNotCarrying : "You are not carrying anything.",
	InventoryScreenNothingToDrop : "You have nothing to drop.",
	InventoryScreenNothingToEat : "You have nothing to eat.",
	InventoryScreenNothingToWear : "You have nothing to wear.",
	InventoryScreenNothingToWield : "You have nothing to wield.",
	InventoryScreenNothingToExamine : "You have nothing to examine.",
	InventoryScreenYouPickUp : "You pick up %s.",
	InventoryScreenCantPickUpFull : "Your inventory is full! Nothing was picked up.",
	InventoryScreenCantPickUpNothing : "There is nothing here to pick up.",

	//ITEM LIST SCREEN
	ItemListScreenNoItems : "0 - no items",
	ItemListScreenWearingSuffix : " (wearing)",
	ItemListScreenWieldingSuffix : " (wielding)",
	ItemListScreenDroppedItem : "You can't carry this anymore: ",

	//WIN SCREEN
	WinScreenEnter : "Entered win screen.",
	WinScreenExit : "Exited win screen.",
	WinScreenYouWin : "You win!",

	//LOSE SCREEN
	LoseScreenEnter : "Entered lose screen.",
	LoseScreenExit : "Exited lose screen.",
	LoseScreenYouLose : "You lose!",

	//PICKUP SCREEN
	PickupScreenChoosePickup : "Choose the items you wish to pickup",
	PickupScreenPartialPickup : "Your inventory is full! Not all items were picked up.",
	
	//DROP SCREEN
	DropScreenChooseDrop : "Choose the item(s) you wish to drop",

	//EAT SCREEN
	EatScreenChooseEat : "Choose the item(s) you wish to eat",
	EatScreenEat : "You eat %s.",

	//EAT SCREEN
	ContainerScreenChooseItem : "Choose the item(s) you wish to loot",
	ContainerScreenLoot : "You loot %s.",
	ContainerScreenLootEmpty : "There is nothing in the ",

	//WIELD SCREEN	
	WieldScreenChooseWield : "Choose the item(s) you wish to wield",
	WieldScreenEmptyHanded : "You are empty handed.",
	WieldScreenYouAreWielding : "You are wielding %s.",

	//WEAR SCREEN
	WearScreenChooseWear : "Choose the item(s) you wish to wear",
	WearScreenNude : "You are not wearing anthing.",
	WearScreenYouAreWearing : "You are wearing %s.",

	//EXAMINE SCREEN
	ExamineScreenChooseExamine : "Choose the item you wish to examine.",
	ExamineScreenIts : "It's %s (%s).",

	//GAIN STAT SCREEN
	GainStatScreenChooseStat : "Choose a stat to increase:",
	GainStatScreenRemainingPoints : "Remaining points: ",

	//HELP SCREEN
	HelpScreenText : "Space Amnesia Help",
	HelpScreenAnyKey : "Press any key to continue",
	HelpScreenPickupKeyDesc : "to pick up items",
	HelpScreenDropKeyDesc : "to drop items",
	HelpScreenEatKeyDesc : "to eat items",
	HelpScreenWieldKeyDesc : "to wield items",
	HelpScreenWearKeyDesc : "to wear items",
	HelpScreenExamineKeyDesc : "to examine items",
	HelpScreenLookKeyDesc : "to look around you",
	HelpScreenHelpKeyDesc : "to show this help screen",

	//ENTITIES
	EntityMovementCantGoUp : "You can't go up here!",
	EntityMovementCanGoUp : "You ascend to level %d!",
	EntityMovementCantGoDown : "You can't go down here!",
	EntityMovementCanGoDown : "You descend to level %d!",
	EntityLookAt : "You see %s.",
	EntityLookAtAll : "There are several objects here.",
	EntityYouHaveDied : "You have died!",

	//REPOSITORY
	RepositoryNoTemplateFound : " repository does not contain ",
	RepositoryNoHabitatFound : " habitat repository does not contain ",

	//MAP
	MapEntityErrorOOB : "Entitys position is out of bounds.",
	MapEntityErrorOccupied : "Tried to add an entity at an occupied positon",

	//BIOME HABITAT NAMES
	MapBiomeHabitatUnderground : "underground",
	MapBiomeHabitatArctic : "arctic",
	MapBiomeHabitatOcean : "ocean",
	MapBiomeHabitatSavannah : "savannah",
	MapBiomeHabitatTemperate : "temperate",
	MapBiomeHabitatJungle : "jungle",
	MapBiomeHabitatNone : "none",
	MapBiomeHabitatAny : "any",

	//TILES - GENERIC
	TileWaterDesc : "Murky blue water",
	TileGrassDesc : "Grass",
	TileDirtFloorDesc : "Dirt",
	TileLeavesFloorDesc : "Leaf covered ground",
	TileSandFloorDesc : "Sand",

	//TILES - BIOMES - UNDERGROUND
	TileCaveFloorDesc : "A cave floor",
	TileCaveWallDesc : "A cave wall",
	TileCaveStaircaseUpDesc : "A rock staircase leading upwards",
	TileCaveStaircaseDownDesc : "A rock staircase leading downwards",

	//TILES - BIOMES - TEMPERATE
	TileTemperateTreesDesc : "A temperate tree",

	//TILES - BIOMES - JUNGLE
	TileJungleTreesDesc : "A jungle tree",

	//TILES - BIOMES - ARCTIC
	TileSnowFloorDesc : "Snow",
	TileIceFloorDesc : "Ice",

	//TILES - BIOMES - SAVANNAH
	TileDryGrassFloorDesc : "Dry grass",

	//TILES - BIOMES - OCEAN
	TileOceanWaterFloorDesc : "Open sea",

	//ENTITIES - PLAYER - EQUIP SLOTS
	EntityPlayerEquipSlotHead : "head",
	EntityPlayerEquipSlotChest : "chest",
	EntityPlayerEquipSlotHands : "hands",
	EntityPlayerEquipSlotLegs : "legs",
	EntityPlayerEquipSlotFeet : "feet",
	EntityPlayerEquipSlotBack : "back",
	EntityPlayerEquipSlotWaist : "waist",
	EntityPlayerEquipSlotLHand : "lhand",
	EntityPlayerEquipSlotRHand : "rhand",

	//ENTITIES - MIXINS - PLAYER
	EntityPlayerPressToContinue : "Press [Enter] to continue!",

	//ENTITIES - MIXINS - ATTACKER / SIGHT
	EntityUndefinedTask : "Tried to perform undefined task ",
	EntityIncreasedAttackValue : "You look stronger!",
	EntityYouAttack : "You strike the %s for %d damage!",
	EntityTakeAttack : "The %s strikes you for %d damage!",
	EntityIncreasedDefenseValue : "You look tougher!",
	EntityIncreasedHealthValue : "You look healthier!",
	EntityKill : "You kill the %s!",
	EntityIncreasedSightValue : "You are more aware of your surroundings!",

	//ENTITY - MIXINS - HUNGER
	EntityStarved : "You have died of starvation!",
	EntityTooFull : "You choke and die!",
	EntityStatusStarving : "Starving",
	EntityStatusHungry: "Hungry",
	EntityStatusOversatiated : "Oversatiated",
	EntityStatusFull : "Full",
	EntityStatusNotHungry : "Not Hungry",

	//ENTITY - MIXINS - CORPSEDROPPER
	EntityCorpse : "corpse",
	EntityCorpseDesc : "a dead body",

	//ENTITY - MIXINS - EXPERIENCE GAINER
	EntityAddAttackValue : "Increase attack value",
	EntityAddDefenseValue : "Increase defense value",
	EntityAddMaxHealthValue : "Increase max health",
	EntityAddSightValue : "Increase sight range",
	EntityAddLevel : "You advance to level %d.",

	//ENTITY - CLASSES
	EntityClassHumanoid : "humanoid",
	EntityClassMutant : "mutant",
	EntityClassAnimal : "animal",
	EntityClassRobot : "robot",
	EntityClassContainer : "container",
	EntityClassSubInsect : "insect",
	EntityClassSubArachnid : "arachnid",
	EntityClassSubReptile : "reptile",
	EntityClassSubMammal : "mammal",
	EntityClassSubAmphibian : "amphibian",

	//ENTITY - PLAYER
	EntityPlayerName : "human (you)",

	//ENTITY - MONSTERS - MUTANTS
	EntityFlytrapSmallName : "Small Flytrap",
	EntityFlytrapMediumName : "Medium Flytrap",
	EntityFlytrapLargeName : "Maneater Flytrap",

	//ENTITY - MONSTERS - ANIMALS
	EntityBatName : "Bat",
	EntityNewtName : "Newt",
	EntityCaveSpiderName : "Cave Spider",
	EntityCaveBeetleName : "Cave Beetle",
	EntityBearBlackName : "Black Bear",
	EntityBearBrownName : "Brown Bear",
	EntityBearGrizzlyName : "Grizzly Bear",
	EntityLionMountainName : "Mountain Lion",
	EntityLionSavannahName : "Savannah Lion",
	EntityAsianElephantSavannahName : "Asian Elephant",
	EntityAfricanElephantSavannahName : "African Elephant",
	EntityTigerSiberianName : "Siberian Tiger",
	EntityCobraName : "Cobra",
	EntityAnacondaName : "Anaconda",
	EntityBoaConstrictorName : "Boa Constrictor",
	EntitySharkMakoName : "Mako Shark",
	EntitySharkGreatWhiteName : "Great White Shark",
	EntitySharkLandName : "Land Shark",
	EntitySharkMegalodonName : "Megalodon",

	//ENTITY - MONSTERS - ROBOTS
	EntityDroidSecurityLightName : "Light Security Droid",
	EntityDroidSecurityMediumName : "Medium Security Droid",
	EntityDroidSecurityHeavyName : "Heavy Security Droid",
	EntityDroidSecurityRiotName : "Riot Suppression Droid",

	EntityDroidMaintenanceLightName : "Light Maintenance Droid",
	EntityDroidMaintenanceMediumName : "Medium Maintenance Droid",
	EntityDroidMaintenanceHeavyName : "Heavy Maintenance Droid",

	EntityDroidHazardLightName : "Light Hazard Droid",
	EntityDroidHazardMediumName : "Medium Hazard Droid",
	EntityDroidHazardHeavyName : "Heavy Hazard Droid",

	EntityDroidCleanupName : "Radioactive Cleanup Droid",

	//ITEMS - JUNK
	ItemRockName : "Rock",
	ItemRockDesc : "A rock",

	ItemGauzeName : "Gauze",
	ItemGauzeDesc : "Some gauze",

	ItemPlantExtractsName : "Plant Extracts",
	ItemPlantExtractsDesc : "Distilled plant enzymes",

	ItemIntestinesName : "Intestines",
	ItemIntestinesDesc : "Intestines from some animal",

	ItemWoodScrapName : "Wood Scrap",
	ItemWoodScrapDesc : "Pieces of wood scrap",

	ItemPillowName : "Pillow",
	ItemPillowDesc : "A comfy pillow",

	ItemPillowFeathersName : "Pillow Feathers",
	ItemPillowFeathersDesc : "Pillow feathers harvested from a pillow",

	ItemBottleName : "Bottle",
	ItemBottleDesc : "An empty bottle",

	ItemMTSName : "Military Targeting System",
	ItemMTSDesc : "A neutronimizer 500!",

	ItemFuseName : "Fuse",
	ItemFuseDesc : "An electrical fuse",

	ItemMagnetName : "Magnet",
	ItemMagnetDesc : "A rare earth magnet",

	ItemMetalScrapName : "Metal Scrap",
	ItemMetalScrapDesc : "Pieces of metal scrap",

	ItemTapeName : "Tape",
	ItemTapeDesc : "Durable tape",

	//ITEMS - FOOD
	ItemAppleName : "Apple",
	ItemAppleDesc : "An apple",

	ItemMushroomName : "Mushroom",
	ItemMushroomDesc : "A cave mushroom",

	ItemLichenName : "Lichen",
	ItemLichenDesc : "Some cave lichen",

	ItemOkraName : "Okra",
	ItemOkraDesc : "A small green vegetable",

	ItemMelonName : "Melon",
	ItemMelonDesc : "A tropical melon",

	ItemPumpkinName : "Pumpkin",
	ItemPumpkinDesc : "A round and orange pumpkin",

	ItemMREName : "MRE",
	ItemMREDesc : "A pre-packaged meal",

	ItemSunflowerSeedsName : "A bag of sunflower seeds",
	ItemSunflowerSeedsDesc : "Guht's Premium Sunflower Seeds",

	//ITEMS - MEDICINE
	ItemBandageName : "Bandage(s)",
	ItemBandageDesc : "Bandages made from plant extracts and gauze",

	//ITEMS - USEFULS
	ItemHandChargerName : "Hand Powered Charger",
	ItemHandChargerDesc : "A hand cranked charger",

	ItemWristComputerName : "Wrist Computer",
	ItemWristComputerDesc : "A wrist mounted computer",

	//ITEMS - AMMO
	ItemArrowsName : "Arrow(s)",
	ItemArrowsDesc : "Arrows made from wood and pillow feathers",

	ItemRocketsName : "Rocket(s)",
	ItemRocketsDesc : "Rockets made from pipes, fuses and plant extracts",

	//ITEMS - WEAPONS - ATTACK TYPES
	ItemWeaponAttackTypeSlash : "slash",
	ItemWeaponAttackTypeStrike : "strike",
	ItemWeaponAttackTypeThrust : "thrust",

	//ITEMS - WEAPONS - MELEE - SMALL
	ItemWeaponPipeName : "Pipe",
	ItemWeaponPipeDesc : "A metal pipe",

	ItemWeaponNightstickName : "Nightstick",
	ItemWeaponNightstickDesc : "A nice hard plastic nightstick",

	ItemWeaponBoxcutterName : "Boxcutter",
	ItemWeaponBoxcutterDesc : "A standard boxcutter",

	ItemWeaponWrenchName : "Wrench",
	ItemWeaponWrenchDesc : "A standard plumbers wrench",

	ItemWeaponAxeName : "Stone Axe",
	ItemWeaponAxeDesc : "A crafted stone axe.",

	//ITEMS - WEAPONS - MELEE - MEDIUM
	ItemWeaponSwordOfficerName : "Officers Sword",
	ItemWeaponSwordOfficerDesc : "A ceremonial officers sword",

	ItemWeaponSwordCaptainName : "Captains Sword",
	ItemWeaponSwordCaptainDesc : "A battle-ready sword",

	ItemWeaponSpearName : "Spear",
	ItemWeaponSpearDesc : "A carved spear",

	//ITEMS - WEAPONS - MELEE - CUMBERSOME
	ItemWeaponLargePipeName : "Large Pipe",
	ItemWeaponLargePipeDesc : "A large metal pipe",

	//ITEMS - WEAPONS - RANGED - SMALL
	ItemWeaponAntiRiotGunName : "Anti-Riot Gun",
	ItemWeaponAntiRiotGunDesc : "A gauntlet that fires a ball of energy to stun. Lethal if very close",

	ItemWeaponLaserPistolName : "Laser Pistol",
	ItemWeaponLaserPistolDesc : "A handheld energy weapon",

	//ITEMS - WEAPONS - RANGED - MEDIUM
	ItemWeaponLaserRifleName : "Laser Rifle",
	ItemWeaponLaserRifleDesc : "A medium sized handheld energy weapon",

	ItemWeaponBowName : "Bow",
	ItemWeaponBowDesc : "A simple wooden bow",

	//ITEMS - WEAPONS - RANGED - CUMBERSOME
	ItemWeaponFlamethrowerName : "Flamethrower",
	ItemWeaponFlamethrowerDesc : "A flamethrower",

	ItemWeaponRocketLauncherName : "Rocket Launcher",
	ItemWeaponRocketLauncherDesc : "A rocket launcher",

	//ITEMS - WEAPONS - RANGED - ATTACHMENTS
	ItemWeaponAttachmentSilencerName : "Silencer",
	ItemWeaponAttachmentSilencerDesc : "A silencer for a pistol",

	//ITEMS - WEAPONS - THROWABLES
	ItemWeaponThrowableMolotovName : "Molotov Cocktail",
	ItemWeaponThrowableMolotovDesc : "A molotov cocktail",

	//ITEMS - WEARABLES - LEGS
	ItemWearablesCryoUndiesName : "Cryo Undies",
	ItemWearablesCryoUndiesDesc : "Stark white briefs, form fitting",

	ItemWearablesPantsCrewmanName : "Crewmans Pants",
	ItemWearablesPantsCrewmanDesc : "Standard issue crewmans pants",

	ItemWearablesPantsOfficerName : "Officers Pants",
	ItemWearablesPantsOfficerDesc : "Standard issue officers pants",

	ItemWearablesPantsCaptainName : "Captain Pants",
	ItemWearablesPantsCaptainDesc : "Standard issue captains pants",

	ItemWearablesPantsBDUName : "BDU Pants",
	ItemWearablesPantsBDUDesc : "Tactical black pants, with lots of pockets",

	//ITEMS - WEARABLES - HANDS
	ItemWearablesHandsGlovesName : "Gloves",
	ItemWearablesHandsGlovesDesc : "Mesh working gloves",

	ItemWearablesHandsGlovesWelderName : "Welders Gloves",
	ItemWearablesHandsGlovesWelderDesc : "Tanned leather gloves",

	//ITEMS - WEARABLES - CHEST
	ItemWearablesChestCryoFilmName : "Cryo Film",
	ItemWearablesChestCryoFilmDesc : "A gross film leftover from the cryogenic freezing",

	ItemWearablesChestShirtCrewmansName : "Crewmans Shirt",
	ItemWearablesChestShirtCrewmansDesc : "Standard issue crewmans shirt",

	ItemWearablesChestShirtOfficersName : "Officers Shirt",
	ItemWearablesChestShirtOfficersDesc : "Standard issue officers shirt",

	ItemWearablesChestShirtCaptainsName : "Captains Shirt",
	ItemWearablesChestShirtCaptainsDesc : "Standard issue captains shirt",

	ItemWearablesChestVestRiotName : "Riot Vest",
	ItemWearablesChestVestRiotDesc : "A paired vest and tactical black longsleeve shirt, with lots of pockets",

	//ITEMS - WEARABLES - FEET
	ItemWearablesFeetShoesCrewmansName : "Crewmans Shoes",
	ItemWearablesFeetShoesCrewmansDesc : "Standard issue crewmans shoes",

	ItemWearablesFeetBootsSoldierName : "Soldiers Combat Boots",
	ItemWearablesFeetBootsSoldierDesc : "Standard issue soldiers boots",

	//ITEMS - WEARABLES - HEAD
	ItemWearablesHeadGogglesName : "Goggles",
	ItemWearablesHeadGogglesDesc : "Cheap eye protection",

	ItemWearablesHeadHatCrewmansName : "Crewmans Hat",
	ItemWearablesHeadHatCrewmansDesc : "Standard issue crewmans hat",

	ItemWearablesHeadHatOfficersName : "Officers Hat",
	ItemWearablesHeadHatOfficersDesc : "Standard issue officers hat",

	ItemWearablesHeadHatCaptainsName : "Captains Hat",
	ItemWearablesHeadHatCaptainsDesc : "Standard issue captains hat",

	ItemWearablesHeadShieldWeldersName : "Welders Shield",
	ItemWearablesHeadShieldWeldersDesc : "Standard eye shield worn by welders",

	ItemWearablesHeadHelmetRiotName : "Riot Helmet",
	ItemWearablesHeadHelmetRiotDesc : "A riot helmet, with shield",	

	ItemWearablesHeadXRayGogglesName : "X-Ray Goggles",
	ItemWearablesHeadXRayGogglesDesc : "Jury rigged x-ray goggles",

	//ITEMS - WEARABLES - BACK
	ItemWearablesBackToteName : "Tote Bag",
	ItemWearablesBackToteDesc : "An over the shoulder tote bag",

	ItemWearablesBackPackName : "Backpack",
	ItemWearablesBackPackDesc : "A school backpack",	

	ItemWearablesBackPackMilName : "Military Pack",
	ItemWearablesBackPackMilDesc : "A military Pack",

	//ITEMS - WEARABLES - WAIST
	ItemWearablesWaistBeltName : "Belt",
	ItemWearablesWaistBeltDesc : "A standard belt",

	ItemWearablesWaistFannyPackName : "Fanny Pack",
	ItemWearablesWaistFannyPackDesc : "A fanny pack",

	//ITEMS - CONTAINERS
	
	ItemContainerLockerName : "Locker",
	ItemContainerLockerDesc : "A stand up metal locker",

	ItemContainerFootLockerName : "Foot Locker",
	ItemContainerFootLockerDesc : "A foot locker",

	ItemContainerTrunkName : "Trunk",
	ItemContainerTrunkDesc : "A steamer trunk",

	//ITEMS - QUEST
	ItemQuestGymTowelName : "Gym Towel",
	ItemQuestGymTowelDesc : "A moldy gym towel"
}