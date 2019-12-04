// Define our playing screen
Game.Screen.playScreen = {
    _player: null,
    _gameEnded: false,
    _subScreen: null,
    enter: function() {
        // Create a map based on our size parameters
        var width = 100;
        var height = 48;
        var depth = 6;
        // Create our map from the tiles and player
        this._player = new Game.Entity(Game.PlayerTemplate);
        var tiles = new Game.Builder(width, height, depth).getTiles();
        var map = new Game.Map.biome_underground(tiles, this._player);
        //var map = new Game.Map.cryogenics(this._player);
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
        this.renderMessages(display);
        // Render the hud
        this.renderHUD(display);
        // Render the inventory
        this.renderInventory(display);
    },
    getScreenOffsets: function() {
        // Make sure we still have enough space to fit an entire game screen
        var topLeftX = Math.max(0, this._player.getX() - (Game.getScreenWidth() / 2));
        // Make sure we still have enough space to fit an entire game screen
        topLeftX = Math.min(topLeftX, this._player.getMap().getWidth() -
            Game.getScreenWidth());
        // Make sure the y-axis doesn't above the top bound
        var topLeftY = Math.max(0, this._player.getY() - (Game.getScreenHeight() / 2));
        // Make sure we still have enough space to fit an entire game screen
        topLeftY = Math.min(topLeftY, this._player.getMap().getHeight() - Game.getScreenHeight());
        return {
            x: topLeftX,
            y: topLeftY
        };
    },
    renderHUD: function(display) {
        // Render player stats
        var stats = vsprintf('HP: %d/%d<br>L: %d<br>XP: %d', 
            [this._player.getHp(), this._player.getMaxHp(),
             this._player.getLevel(), this._player.getExperience()]);
        stats += "<br>";
        stats += this._player.getHungerState();
        if (document.getElementById("canvasStatsText"))
            document.getElementById("canvasStatsText").innerHTML = stats;
    },
    writeItemCard: function(item) {

        if (item == null)
            return "Nothing Equipped";

        info = item.getName() + "<br>";
        info += item.getPrefixForRarity(); + "Quality " + item.getSlot() + "<br><br>";

        if (item.getDefenseValue() != 0)
            info += "Defense: " + item.getDefenseValue() + "<br>";

        if (item.getAttackValue() != 0)
            info += "Attack: " + item.getAttackValue() + "<br>";

        if (item.getCritValue() != 0)
            info += "Crit +" + item.getCritValue() + "%<br>";

        if (item.getDodgeValue() != 0)
            info += "Dodge +" + item.getDodgeValue() + "%<br>";

        if (item.getHitValue() != 0)
            info += "Hit +" + item.getHitValue() + "%<br>"; 

        if (item.getParryValue() != 0)
            info += "Parry +" + item.getParryValue() + "%<br>";

        if (item.getDescription() != '')
            info += "\"" + item.getDescription() + "\"";

        return info;
    },
    renderSlot: function(element, item) {

        default_icon_url = "url('assets/images/inventory/icons/empty_icon.png')";

        if (item) {
            imageIcon = "url('" + item.getIcon() + "')";
            if (element.style.backgroundImage != imageIcon) {
                element.style.backgroundImage = imageIcon;
                element.setAttribute("data-item-card", this.writeItemCard(item));
            }
        } else {
            if (element.style.backgroundImage != default_icon_url) {
                element.style.backgroundImage = default_icon_url;
                element.setAttribute("data-item-card", "");
            }
        }
    },
    addMouseEnterListener: function(element) {
        element.addEventListener("mouseenter", function(event) {

            card = document.getElementById( "canvasItemHoverCard" );
            card.style.display = "";
            card.style.top = element.offsetTop + 48 + "px";
            card.style.left = element.offsetLeft + 48 + "px";
            cardText = document.getElementById( "inventoryItemHoverCardText" );
            cardText.innerHTML = element.getAttribute("data-item-card");
        });
    },
    addMouseLeaveListener: function(element) {
        element.addEventListener("mouseleave", function(event) {

            card = document.getElementById( "canvasItemHoverCard" );
            card.style.display = "none";
            cardText = document.getElementById( "inventoryItemHoverCardText" );
            cardText.innerHTML = "";

        });
    },
    setupInventorySlots: function(inventory) {

        //Helm Slot
        var inventoryHelmSlot = document.createElement("div");
        inventoryHelmSlot.id = "canvasInventoryHelmSlot";
        this.addMouseEnterListener(inventoryHelmSlot);
        this.addMouseLeaveListener(inventoryHelmSlot);
        inventory.appendChild(inventoryHelmSlot);

        //Back Slot
        var inventoryBackSlot = document.createElement("div");
        inventoryBackSlot.id = "canvasInventoryBackSlot";
        this.addMouseEnterListener(inventoryBackSlot);
        this.addMouseLeaveListener(inventoryBackSlot);
        inventory.appendChild(inventoryBackSlot);

        //Chest Slot
        var inventoryChestSlot = document.createElement("div");
        inventoryChestSlot.id = "canvasInventoryChestSlot";
        this.addMouseEnterListener(inventoryChestSlot);
        this.addMouseLeaveListener(inventoryChestSlot);
        inventory.appendChild(inventoryChestSlot);

        //Feet Slot
        var inventoryFeetSlot = document.createElement("div");
        inventoryFeetSlot.id = "canvasInventoryFeetSlot";
        this.addMouseEnterListener(inventoryFeetSlot);
        this.addMouseLeaveListener(inventoryFeetSlot);
        inventory.appendChild(inventoryFeetSlot);

        //Legs Slot
        var inventoryLegsSlot = document.createElement("div");
        inventoryLegsSlot.id = "canvasInventoryLegsSlot";
        this.addMouseEnterListener(inventoryLegsSlot);
        this.addMouseLeaveListener(inventoryLegsSlot);
        inventory.appendChild(inventoryLegsSlot);

        //Waist Slot
        var inventoryWaistSlot = document.createElement("div");
        inventoryWaistSlot.id = "canvasInventoryWaistSlot";
        this.addMouseEnterListener(inventoryWaistSlot);
        this.addMouseLeaveListener(inventoryWaistSlot);
        inventory.appendChild(inventoryWaistSlot);

        //LHand Slot
        var inventoryLHandSlot = document.createElement("div");
        inventoryLHandSlot.id = "canvasInventoryLHandSlot";
        this.addMouseEnterListener(inventoryLHandSlot);
        this.addMouseLeaveListener(inventoryLHandSlot);
        inventory.appendChild(inventoryLHandSlot);

        //RHand Slot
        var inventoryRHandSlot = document.createElement("div");
        inventoryRHandSlot.id = "canvasInventoryRHandSlot";
        this.addMouseEnterListener(inventoryRHandSlot);
        this.addMouseLeaveListener(inventoryRHandSlot);
        inventory.appendChild(inventoryRHandSlot);

        //Item Hover Card
        var inventoryItemHoverCard = document.createElement("div");
        inventoryItemHoverCard.id = "canvasItemHoverCard";
        inventoryItemHoverCard.style.display = "none";
        var inventoryItemHoverCardText = document.createElement("p");
        inventoryItemHoverCardText.id = "inventoryItemHoverCardText";
        inventoryItemHoverCard.appendChild(inventoryItemHoverCardText);
        inventory.appendChild(inventoryItemHoverCard);
    },
    renderInventory: function(display) {
        //NOTE: This is appearantly bad performance wise, should store them.
        
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
            this.setupInventorySlots(document.getElementById("canvasInventory" ));

        if (inventoryHelmSlotElement)
            this.renderSlot(inventoryHelmSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotHead));

        if (inventoryBackSlotElement)
            this.renderSlot(inventoryBackSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotBack));

        if (inventoryChestSlotElement)
            this.renderSlot(inventoryChestSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotChest));

        if (inventoryFeetSlotElement)
            this.renderSlot(inventoryFeetSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotFeet));       

        if (inventoryLegsSlotElement)
            this.renderSlot(inventoryLegsSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLegs));

        if (inventoryWaistSlotElement)
            this.renderSlot(inventoryWaistSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotWaist));        

        if (inventoryLHandSlotElement)
            this.renderSlot(inventoryLHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLHand)); 

        if (inventoryRHandSlotElement)
            this.renderSlot(inventoryRHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotRHand));

    },
    renderTiles: function(display) {
        var screenWidth = Game.getScreenWidth();
        var screenHeight = Game.getScreenHeight();
        var offsets = this.getScreenOffsets();
        var topLeftX = offsets.x;
        var topLeftY = offsets.y;
        // This object will keep track of all visible map cells
        var visibleCells = {};
        // Store this._player.getMap() and player's z to prevent losing it in callbacks
        var map = this._player.getMap();
        var currentDepth = this._player.getZ();
        // Find all visible cells and update the object
        map.getFov(currentDepth).compute(
            this._player.getX(), this._player.getY(), 
            this._player.getSightRadius(), 
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
    renderMessages: function(display) {
        // Get the messages in the player's queue and render them
        var messages = this._player.getMessages();

        if (document.getElementById("canvasLogText"))
                document.getElementById("canvasLogText").innerHTML = "";

        for (var i = 0; i < messages.length; i++) {
            if (typeof messages[i] !== 'undefined') {
                if (document.getElementById("canvasLogText")) {
                    document.getElementById("canvasLogText").innerHTML += messages[i];
                    document.getElementById("canvasLogText").innerHTML += "<br>";
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
                this.showItemsSubScreen(Game.Screen.inventoryScreen, this._player.getItems(),
                    loc.InventoryScreenNotCarrying);
                return;
            } else if (inputData.keyCode === config.DropKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.dropScreen, this._player.getItems(),
                    loc.InventoryScreenNothingToDrop);
                return;
            } else if (inputData.keyCode === config.EatKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.eatScreen, this._player.getItems(),
                   loc.InventoryScreenNothingToEat);
                return;
            } else if (inputData.keyCode === config.WearKey) {
                if (inputData.shiftKey) {
                    // Show the wear screen
                    this.showItemsSubScreen(Game.Screen.wearScreen, this._player.getItems(),
                        loc.InventoryScreenNothingToWear);
                } else {
                    // Show the wield screen
                    this.showItemsSubScreen(Game.Screen.wieldScreen, this._player.getItems(),
                        loc.InventoryScreenNothingToWield);
                }
                return;
            } else if (inputData.keyCode === config.ExamineKey) {
                // Show the drop screen
                this.showItemsSubScreen(Game.Screen.examineScreen, this._player.getItems(),
                   loc.InventoryScreenNothingToExamine);
                return;
            } else if (inputData.keyCode === config.PickupKey) {
                var items = this._player.getMap().getItemsAt(this._player.getX(), 
                    this._player.getY(), this._player.getZ());
                // If there is only one item, directly pick it up
                if (items && items.length === 1) {
                    var item = items[0];
                    if (this._player.pickupItems([0])) {
                        Game.sendMessage(this._player, loc.InventoryScreenYouPickUp, [item.describeA()]);
                    } else {
                        Game.sendMessage(this._player, loc.InventoryScreenCantPickUpFull);
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
            this._player.getMap().getEngine().unlock();
        } else if (inputType === 'keypress') {
            var keyChar = String.fromCharCode(inputData.charCode);
            if (keyChar === '>') {
                this.move(0, 0, 1);
            } else if (keyChar === '<') {
                this.move(0, 0, -1);
            } else if (keyChar === ';') {
                // Setup the look screen.
                var offsets = this.getScreenOffsets();
                Game.Screen.lookScreen.setup(this._player,
                    this._player.getX(), this._player.getY(),
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
            this._player.getMap().getEngine().unlock();
        } 
    },
    move: function(dX, dY, dZ) {
        var newX = this._player.getX() + dX;
        var newY = this._player.getY() + dY;
        var newZ = this._player.getZ() + dZ;
        // Try to move to the new cell
        this._player.tryMove(newX, newY, newZ, this._player.getMap());
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
        if (items && subScreen.setup(this._player, items) > 0) {
            if (!container || container == undefined) {
                this.setSubScreen(subScreen);
            } else {
                this.setSubScreen(subScreen, container);
            }
        } else {
            if (!container || container == undefined ) {
                Game.sendMessage(this._player, emptyMessage);
            } else {
                Game.sendMessage(this._player, emptyMessage, [container.getName()]);
            }
            Game.refresh();
        }
    }
};