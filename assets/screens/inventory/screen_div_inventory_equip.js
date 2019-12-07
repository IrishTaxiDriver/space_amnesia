Game.Screen.divInventoryEquip = {
    renderInventory: function() {
        //NOTE: This is appearantly bad performance wise, should store them.
        
		this._player = Game.Screen.playScreen._player;

        inventoryHelmSlotElement  = document.getElementById("canvasInventoryHelmSlot" );
        inventoryBackSlotElement  = document.getElementById("canvasInventoryBackSlot" );
        inventoryChestSlotElement = document.getElementById("canvasInventoryChestSlot");
        inventoryFeetSlotElement  = document.getElementById("canvasInventoryFeetSlot" );
        inventoryLegsSlotElement  = document.getElementById("canvasInventoryLegsSlot" );
        inventoryWaistSlotElement = document.getElementById("canvasInventoryWaistSlot");
        inventoryLHandSlotElement = document.getElementById("canvasInventoryLHandSlot");
        inventoryRHandSlotElement = document.getElementById("canvasInventoryRHandSlot");

        //First time setup.
        if (!inventoryHelmSlotElement && !inventoryBackSlotElement && !inventoryChestSlotElement &&
            !inventoryFeetSlotElement && !inventoryLegsSlotElement && !inventoryWaistSlotElement &&
            !inventoryLHandSlotElement && !inventoryRHandSlotElement)
            Game.Screen.divInventoryManager.setupInventorySlots(document.getElementById("canvasInventory" ));

        if (inventoryHelmSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryHelmSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotHead));

        if (inventoryBackSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryBackSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotBack));

        if (inventoryChestSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryChestSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotChest));

        if (inventoryFeetSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryFeetSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotFeet));       

        if (inventoryLegsSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryLegsSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLegs));

        if (inventoryWaistSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryWaistSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotWaist));        

        if (inventoryLHandSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryLHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLHand)); 

        if (inventoryRHandSlotElement)
            Game.Screen.divInventoryManager.renderSlot(inventoryRHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotRHand));

    }
};