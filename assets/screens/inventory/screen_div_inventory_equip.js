Game.Screen.divInventoryEquip = {
	_firstTimeSetup: null,
	setup: function() {

		this._firstTimeSetup = true;

        Game.Screen._inventoryHelmSlot  = document.getElementById("canvasInventoryHelmSlot" );
        Game.Screen._inventoryBackSlot  = document.getElementById("canvasInventoryBackSlot" );
        Game.Screen._inventoryChestSlot = document.getElementById("canvasInventoryChestSlot");
        Game.Screen._inventoryFeetSlot  = document.getElementById("canvasInventoryFeetSlot" );
        Game.Screen._inventoryLegsSlot  = document.getElementById("canvasInventoryLegsSlot" );
        Game.Screen._inventoryWaistSlot = document.getElementById("canvasInventoryWaistSlot");
        Game.Screen._inventoryLHandSlot = document.getElementById("canvasInventoryLHandSlot");
        Game.Screen._inventoryRHandSlot = document.getElementById("canvasInventoryRHandSlot");

	},
    renderInventory: function() {
       
       	if (this._firstTimeSetup == null)
       		this.setup();

		if (Game.Screen.divInventoryManager._activeInventoryDiv == "equip") {
		
		    Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryHelmSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotHead));
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryBackSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotBack));
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryChestSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotChest));
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryFeetSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotFeet));       
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryLegsSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotLegs));
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryWaistSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotWaist));        
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryLHandSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotLHand)); 
	        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryRHandSlot, Game._player.getItemInSlot(loc.EntityPlayerEquipSlotRHand));	
			
		}

    }
};