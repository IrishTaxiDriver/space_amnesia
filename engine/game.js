var Game =  {
	_display: null,
    _currentScreen: null,
    _screenWidth: firm.Width,
    _screenHeight: firm.Height,
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
        document.body.appendChild(this.getDisplay().getContainer());
    },
    addStatsDisplay: function() {
        var stats = document.createElement("div");
        stats.id = "canvasStats";

        //HP Bar
        var statsHPPolyBarBackground = document.createElement("div");
        statsHPPolyBarBackground.id = "statsHPPolyBarBackground";
        statsHPPolyBarBackground.style.display = "none";

        var statsHPPolyBar = document.createElement("img");
        statsHPPolyBar.id = "statsHPPolyBar";
        statsHPPolyBar.src = "assets/images/misc/polybar_red.png";
        statsHPPolyBar.style.display = "none";

        var statsHPText = document.createElement("p");
        statsHPText.id = "statsHPText";
        statsHPText.style.display = "none";

        var statsText = document.createElement("p");
        statsText.id = "canvasStatsText";

        statsHPPolyBarBackground.appendChild(statsHPPolyBar);
        statsHPPolyBarBackground.appendChild(statsHPText);

        //XP Bar
        var statsXPPolyBarBackground = document.createElement("div");
        statsXPPolyBarBackground.id = "statsXPPolyBarBackground";
        statsXPPolyBarBackground.style.display = "none";

        var statsXPPolyBar = document.createElement("img");
        statsXPPolyBar.id = "statsXPPolyBar";
        statsXPPolyBar.src = "assets/images/misc/polybar_yellow.png";
        statsXPPolyBar.style.display = "none";

        var statsXPText = document.createElement("p");
        statsXPText.id = "statsXPText";
        statsXPText.style.display = "none";

        statsXPPolyBarBackground.appendChild(statsXPPolyBar);
        statsXPPolyBarBackground.appendChild(statsXPText);

        //Verbose stats
        var statsVerboseBackground = document.createElement("div");
        statsVerboseBackground.id = "statsVerboseBackground";
        statsHPPolyBarBackground.style.display = "none";

        var statsVerboseTextLeft = document.createElement("p");
        statsVerboseTextLeft.id = "statsVerboseTextLeft";
        statsVerboseTextLeft.style.display = "none";

        var statsVerboseTextRight = document.createElement("p");
        statsVerboseTextRight.id = "statsVerboseTextRight";
        statsVerboseTextRight.style.display = "none";

        statsVerboseBackground.appendChild(statsVerboseTextLeft);
        statsVerboseBackground.appendChild(statsVerboseTextRight);

        //Append the main divs to the stats div
        stats.appendChild(statsHPPolyBarBackground);
        stats.appendChild(statsXPPolyBarBackground);
        stats.appendChild(statsVerboseBackground);

        //And append the stats div to the page
        document.body.appendChild(stats);
    },
    addInventoryDisplay: function() {
        var inventory = document.createElement("div");
        inventory.id = "canvasInventory";
        document.body.appendChild(inventory);

    },
    addLogDisplay: function() {
        var log = document.createElement("div");
        log.id = "canvasLog";
        var logText = document.createElement("p");
        logText.id = "canvasLogText";
        log.appendChild(logText);
        document.body.appendChild(log);
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
        Game.addStatsDisplay();
        Game.addDisplay();
        Game.addInventoryDisplay();
        Game.addLogDisplay();
        // Load the start screen
        Game.switchScreen(Game.Screen.startScreen);
    }
};