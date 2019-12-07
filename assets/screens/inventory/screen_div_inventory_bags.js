Game.Screen.divInventoryBags = {
	_player: null,
	setup: function() {

		this._player = Game.Screen.playScreen._player;

		Game.Screen._inventoryBagSlot1  = document.getElementById("canvasInventoryBagSlot1" );
		Game.Screen._inventoryBagSlot2  = document.getElementById("canvasInventoryBagSlot2" );
		Game.Screen._inventoryBagSlot3  = document.getElementById("canvasInventoryBagSlot3" );
		Game.Screen._inventoryBagSlot4  = document.getElementById("canvasInventoryBagSlot4" );
		Game.Screen._inventoryBagSlot5  = document.getElementById("canvasInventoryBagSlot5" );
		Game.Screen._inventoryBagSlot6  = document.getElementById("canvasInventoryBagSlot6" );
		Game.Screen._inventoryBagSlot7  = document.getElementById("canvasInventoryBagSlot7" );
		Game.Screen._inventoryBagSlot8  = document.getElementById("canvasInventoryBagSlot8" );
		Game.Screen._inventoryBagSlot9  = document.getElementById("canvasInventoryBagSlot9" );
		Game.Screen._inventoryBagSlot10 = document.getElementById("canvasInventoryBagSlot10" );
		Game.Screen._inventoryBagSlot11 = document.getElementById("canvasInventoryBagSlot11" );
		Game.Screen._inventoryBagSlot12 = document.getElementById("canvasInventoryBagSlot12" );
		Game.Screen._inventoryBagSlot13 = document.getElementById("canvasInventoryBagSlot13" );
		Game.Screen._inventoryBagSlot14 = document.getElementById("canvasInventoryBagSlot14" );
		Game.Screen._inventoryBagSlot15 = document.getElementById("canvasInventoryBagSlot15" );

	},
	renderBags: function() {

		if (this._player == null)
			this.setup();

	}
};