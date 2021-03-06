// Define our playing screen
Game.Screen.playScreen = {
    _gameEnded: false,
    _subScreen: null, 
    enter: function() {
        // Create a map based on our size parameters
        var width = 100;
        var height = 48;
        var depth = 6;
        // Create our map from the tiles and player
        Game._player = new Game.Entity(Game.PlayerTemplate);
        var tiles = new Game.Builder(width, height, depth).getTiles();
        var map = new Game.Map.biome_underground(tiles, Game._player);
        //var map = new Game.Map.cryogenics(Game._player);
        // Start the map's engine
        map.getEngine().start();
    },
    exit: function() {
        console.log(loc.PlayScreenExit);
    },
    render: function(display) {
        // Render subscreen if there is one
        if (this._subScreen) {
            this._subScreen.render(display);
            return;
        }
        // Render the tiles
        this.renderTiles(display);
        // Render messages
        Game.Screen.divLog.renderMessages();
        // Render the hud
        Game.Screen.divStats.renderHUD();
        // Render the inventory
        Game.Screen.divInventoryManager.manage();
    },
    getScreenOffsets: function() {
        // Make sure we still have enough space to fit an entire game screen
        var topLeftX = Math.max(0, Game._player.getX() - (Game.getScreenWidth() / 2));
        // Make sure we still have enough space to fit an entire game screen
        topLeftX = Math.min(topLeftX, Game._player.getMap().getWidth() -
            Game.getScreenWidth());
        // Make sure the y-axis doesn't above the top bound
        var topLeftY = Math.max(0, Game._player.getY() - (Game.getScreenHeight() / 2));
        // Make sure we still have enough space to fit an entire game screen
        topLeftY = Math.min(topLeftY, Game._player.getMap().getHeight() - Game.getScreenHeight());
        return {
            x: topLeftX,
            y: topLeftY
        };
    },
    renderTiles: function(display) {
        var screenWidth = Game.getScreenWidth();
        var screenHeight = Game.getScreenHeight();
        var offsets = this.getScreenOffsets();
        var topLeftX = offsets.x;
        var topLeftY = offsets.y;
        // This object will keep track of all visible map cells
        var visibleCells = {};
        // Store Game._player.getMap() and player's z to prevent losing it in callbacks
        var map = Game._player.getMap();
        var currentDepth = Game._player.getZ();
        // Find all visible cells and update the object
        map.getFov(currentDepth).compute(
            Game._player.getX(), Game._player.getY(), 
            Game._player.getSightRadius(), 
            function(x, y, radius, visibility) {
                visibleCells[x + "," + y] = true;
                // Mark cell as explored
                map.setExplored(x, y, currentDepth, true);
            });
        // Render the explored map cells
        for (var x = topLeftX; x < topLeftX + screenWidth; x++) {
            for (var y = topLeftY; y < topLeftY + screenHeight; y++) {
                if (map.isExplored(x, y, currentDepth)) {
                    // Fetch the glyph for the tile and render it to the screen
                    // at the offset position.
                    var glyph = map.getTile(x, y, currentDepth);
                    var foreground = glyph.getForeground();
                    // If we are at a cell that is in the field of vision, we need
                    // to check if there are items or entities.
                    if (visibleCells[x + ',' + y]) {
                        // Check for items first, since we want to draw entities
                        // over items.
                        var items = map.getItemsAt(x, y, currentDepth);
                        // If we have items, we want to render the top most item
                        if (items) {
                            glyph = items[items.length - 1];
                        }
                        // Check if we have an entity at the position
                        if (map.getEntityAt(x, y, currentDepth)) {
                            glyph = map.getEntityAt(x, y, currentDepth);
                        }
                        // Update the foreground color in case our glyph changed
                        foreground = glyph.getForeground();
                    } else {
                        // Since the tile was previously explored but is not 
                        // visible, we want to change the foreground color to
                        // dark gray.
                        foreground = 'darkGray';
                    }
                    display.draw(
                        x - topLeftX,
                        y - topLeftY,
                        glyph.getChar(), 
                        foreground, 
                        glyph.getBackground());
                }
            }
        }
    },
    handleInput: function(inputType, inputData) {
        // If the game is over, enter will bring the user to the losing screen.
        if (this._gameEnded) {
            if (inputType === 'keydown' && inputData.keyCode === ROT.VK_RETURN) {
                Game.switchScreen(Game.Screen.loseScreen);
            }
            // Return to make sure the user can't still play
            return;
        }
        // Handle subscreen input if there is one
        if (this._subScreen) {
            this._subScreen.handleInput(inputType, inputData);
            return;
        }
        if (inputType === 'keydown') {
            // Movement
            if (inputData.keyCode === config.MoveKeyLeft) {
                this.move(-1, 0, 0);
            } else if (inputData.keyCode === config.MoveKeyRight) {
                this.move(1, 0, 0);
            } else if (inputData.keyCode === config.MoveKeyUp) {
                this.move(0, -1, 0);
            } else if (inputData.keyCode === config.MoveKeyDown) {
                this.move(0, 1, 0);
            } else if (inputData.keyCode === config.InventoryKey) {
                // Show the inventory screen
                this.showItemsSubScreen(Game.Screen.inventoryScreen, Game._player.getItems(),
                    loc.InventoryScreenNotCarrying);
                return;
            } else if (inputData.keyCode === config.DropKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.dropScreen, Game._player.getItems(),
                    loc.InventoryScreenNothingToDrop);
                return;
            } else if (inputData.keyCode === config.EatKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.eatScreen, Game._player.getItems(),
                   loc.InventoryScreenNothingToEat);
                return;
            } else if (inputData.keyCode === config.WearKey) {
                if (inputData.shiftKey) {
                    // Show the wear screen
                    this.showItemsSubScreen(Game.Screen.wearScreen, Game._player.getItems(),
                        loc.InventoryScreenNothingToWear);
                } else {
                    // Show the wield screen
                    this.showItemsSubScreen(Game.Screen.wieldScreen, Game._player.getItems(),
                        loc.InventoryScreenNothingToWield);
                }
                return;
            } else if (inputData.keyCode === config.ExamineKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.examineScreen, Game._player.getItems(),
                   loc.InventoryScreenNothingToExamine);
                return;
            } else if (inputData.keyCode === config.PickupKey) {
                var items = Game._player.getMap().getItemsAt(Game._player.getX(), 
                    Game._player.getY(), Game._player.getZ());
                // If there is only one item, directly pick it up
                if (items && items.length === 1) {
                    var item = items[0];
                    if (Game._player.pickupItems([0])) {
                        Game.sendMessage(Game._player, loc.InventoryScreenYouPickUp, [item.describeA()]);
                    } else {
                        Game.sendMessage(Game._player, loc.InventoryScreenCantPickUpFull);
                    }
                } else {
                    this.showItemsSubScreen(Game.Screen.pickupScreen, items,
                        loc.InventoryScreenCantPickUpNothing);
                } 
            } else {
                // Not a valid key
                return;
            }
            // Unlock the engine
            Game._player.getMap().getEngine().unlock();
        } else if (inputType === 'keypress') {
            var keyChar = String.fromCharCode(inputData.charCode);
            if (keyChar === '>') {
                this.move(0, 0, 1);
            } else if (keyChar === '<') {
                this.move(0, 0, -1);
            } else if (keyChar === ';') {
                // Setup the look screen.
                var offsets = this.getScreenOffsets();
                Game.Screen.lookScreen.setup(Game._player,
                    Game._player.getX(), Game._player.getY(),
                    offsets.x, offsets.y);
                this.setSubScreen(Game.Screen.lookScreen);
                return;
            } else if (keyChar === '?') {
                // Setup the look screen.
                this.setSubScreen(Game.Screen.helpScreen);
                return;
            } else {
                // Not a valid key
                return;
            }
            // Unlock the engine
            Game._player.getMap().getEngine().unlock();
        } 
    },
    move: function(dX, dY, dZ) {
        var newX = Game._player.getX() + dX;
        var newY = Game._player.getY() + dY;
        var newZ = Game._player.getZ() + dZ;
        // Try to move to the new cell
        Game._player.tryMove(newX, newY, newZ, Game._player.getMap());
    },
    setGameEnded: function(gameEnded) {
        this._gameEnded = gameEnded;
    },
    setSubScreen: function(subScreen, container) {
        this._subScreen = subScreen;
        if (container)
            this._container = container;
        // Refresh screen on changing the subscreen
        Game.refresh();
    },
    showItemsSubScreen: function(subScreen, items, emptyMessage, container) {
        if (items && subScreen.setup(Game._player, items) > 0) {
            if (!container || container == undefined) {
                this.setSubScreen(subScreen);
            } else {
                this.setSubScreen(subScreen, container);
            }
        } else {
            if (!container || container == undefined ) {
                Game.sendMessage(Game._player, emptyMessage);
            } else {
                Game.sendMessage(Game._player, emptyMessage, [container.getName()]);
            }
            Game.refresh();
        }
    }
};