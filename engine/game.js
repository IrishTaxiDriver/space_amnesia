var Game =  {
	_display: null,
    _currentScreen: null,
    _screenWidth: firm.Width,
    _screenHeight: firm.Height,
    _player: null,
	init: function() {
        // Any necessary initialization will go here.
        this._display = new ROT.Display({width: this._screenWidth,
                                         height: this._screenHeight + 1});
        // Create a helper function for binding to an event
        // and making it send it to the screen
        var game = this; // So that we don't lose this
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(e) {
                // When an event is received, send it to the
                // screen if there is one
                if (game._currentScreen !== null) {
                    // Send the event type and data to the screen
                    game._currentScreen.handleInput(event, e);
                }
            });
        };
        // Bind keyboard input events
        bindEventToScreen('keydown');
        //bindEventToScreen('keyup');
        bindEventToScreen('keypress');
    },
	getDisplay: function() {
		return this._display;
	},
	getScreenWidth: function() {
        return this._screenWidth;
	},
	getScreenHeight: function() {
	    return this._screenHeight;
	},
    refresh: function() {
        // Clear the screen
        this._display.clear();
        // Render the screen
        this._currentScreen.render(this._display);
    },
	switchScreen: function(screen) {
        // If we had a screen before, notify it that we exited
        if (this._currentScreen !== null) {
            this._currentScreen.exit();
        }
        // Clear the display
        this.getDisplay().clear();
        // Update our current screen, notify it we entered
        // and then render it
        this._currentScreen = screen;
        if (!this._currentScreen !== null) {
            this._currentScreen.enter();
            this.refresh();
        }
    },
    addDisplay: function() {
        Game.Screen._canvasGame.appendChild(this.getDisplay().getContainer());
    },
    addGameDisplay: function() {
        Game.Screen._canvasGame = document.createElement("div");
        Game.Screen._canvasGame.id = "canvasGame";

        document.body.appendChild(Game.Screen._canvasGame);
    },
    addStartDisplay: function() {
        Game.Screen._canvasStart = document.createElement("div");
        Game.Screen._canvasStart.id = "canvasStart";

        Game.Screen._canvasStartText = document.createElement("p");
        Game.Screen._canvasStartText.id = "canvasStartText";
        Game.Screen._canvasStartText.innerHTML = loc.StartScreenGameTitle;

        Game.Screen._canvasStartDescription = document.createElement("p");
        Game.Screen._canvasStartDescription.id = "canvasStartDescription";
        Game.Screen._canvasStartDescription.innerHTML = loc.StartScreenGameDesc;

        Game.Screen._canvasStart.appendChild(Game.Screen._canvasStartText);
        Game.Screen._canvasStart.appendChild(Game.Screen._canvasStartDescription);

        Game.Screen._canvasGame.appendChild(Game.Screen._canvasStart);
    },
    addStatsDisplay: function() {
        var stats = document.createElement("div");
        stats.id = "canvasStats";

        //And append the stats div to the page
        Game.Screen._canvasGame.appendChild(stats);
    },
    addInventoryDisplay: function() {
        var inventory = document.createElement("div");
        inventory.id = "canvasInventory";
        Game.Screen._canvasGame.appendChild(inventory);

    },
    addLogDisplay: function() {
        var log = document.createElement("div");
        log.id = "canvasLog";
        var logText = document.createElement("p");
        logText.id = "canvasLogText";
        log.appendChild(logText);
        Game.Screen._canvasGame.appendChild(log);
    },
};

window.onload = function() {
    // Check if rot.js can work on this browser
    if (!ROT.isSupported()) {
        alert(loc.NotSupport);
    } else {
        // Initialize the game
        Game.init();
        // Add the container to our HTML page
        Game.addGameDisplay();
        Game.addStartDisplay();
        Game.addStatsDisplay();
        Game.addDisplay();
        Game.addInventoryDisplay();
        Game.addLogDisplay();
        // Load the start screen
        Game.switchScreen(Game.Screen.startScreen);
    }
};