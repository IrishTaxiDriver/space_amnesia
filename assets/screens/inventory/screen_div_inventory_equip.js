Game.Screen.divInventoryEquip = {
	_player: null,
	setup: function() {

		this._player = Game.Screen.playScreen._player;

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
       
       	if (this._player == null)
       		this.setup();

        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryHelmSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotHead));
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryBackSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotBack));
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryChestSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotChest));
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryFeetSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotFeet));       
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryLegsSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLegs));
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryWaistSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotWaist));        
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryLHandSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLHand)); 
        Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryRHandSlot, this._player.getItemInSlot(loc.EntityPlayerEquipSlotRHand));

    }
};