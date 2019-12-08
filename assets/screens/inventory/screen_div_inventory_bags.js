Game.Screen.divInventoryBags = {
	_firstTimeSetup: null,
	setup: function() {

		this._firstTimeSetup = true;

		Game.Screen._inventoryBagSlot1  = document.getElementById("canvasInventoryBagSlot1" );
		Game.Screen._inventoryBagSlot2  = document.getElementById("canvasInventoryBagSlot2" );
		Game.Screen._inventoryBagSlot3  = document.getElementById("canvasInventoryBagSlot3" );
		Game.Screen._inventoryBagSlot4  = document.getElementById("canvasInventoryBagSlot4" );
		Game.Screen._inventoryBagSlot5  = document.getElementById("canvasInventoryBagSlot5" );
		Game.Screen._inventoryBagSlot6  = document.getElementById("canvasInventoryBagSlot6" );
		Game.Screen._inventoryBagSlot7  = document.getElementById("canvasInventoryBagSlot7" );
		Game.Screen._inventoryBagSlot8  = document.getElementById("canvasInventoryBagSlot8" );
		Game.Screen._inventoryBagSlot9  = document.getElementById("canvasInventoryBagSlot9" );
		Game.Screen._inventoryBagSlot10 = document.getElementById("canvasInventoryBagSlot10");
		Game.Screen._inventoryBagSlot11 = document.getElementById("canvasInventoryBagSlot11");
		Game.Screen._inventoryBagSlot12 = document.getElementById("canvasInventoryBagSlot12");
		Game.Screen._inventoryBagSlot13 = document.getElementById("canvasInventoryBagSlot13");
		Game.Screen._inventoryBagSlot14 = document.getElementById("canvasInventoryBagSlot14");
		Game.Screen._inventoryBagSlot15 = document.getElementById("canvasInventoryBagSlot15");

		Game.Screen._inventoryBagsText = document.getElementById("inventoryBagsText");

		Game.Screen._inventoryBagSlots = [Game.Screen._inventoryBagSlot1, Game.Screen._inventoryBagSlot2,
										  Game.Screen._inventoryBagSlot3, Game.Screen._inventoryBagSlot4,
										  Game.Screen._inventoryBagSlot5, Game.Screen._inventoryBagSlot6,
										  Game.Screen._inventoryBagSlot7, Game.Screen._inventoryBagSlot8,
										  Game.Screen._inventoryBagSlot9, Game.Screen._inventoryBagSlot10,
										  Game.Screen._inventoryBagSlot11, Game.Screen._inventoryBagSlot12,
										  Game.Screen._inventoryBagSlot13, Game.Screen._inventoryBagSlot14,
										  Game.Screen._inventoryBagSlot15];

	},
	renderBags: function() {

		if (this._firstTimeSetup == null)
			this.setup();

		if (Game.Screen.divInventoryManager._activeInventoryDiv == "bags") {

			for(var i = 0; i < Game._player._items.length; i++) {
				if (i != 15 )
					Game.Screen.divInventoryManager.renderSlot(Game.Screen._inventoryBagSlots[i], Game._player._items[i]);
			}

			Game.Screen._inventoryBagsText.innerHTML = vsprintf(Game.Screen._inventoryBagsTextText, [Game._player.getFilledInventorySlots(), Game._player.inventorySlots]);

		}

	}
};