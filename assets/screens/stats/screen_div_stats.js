Game.Screen.divStats = {
    _player: null,
    setup: function() {

        this._player = Game.Screen.playScreen._player;

        Game.Screen._canvasStats = document.getElementById("canvasStats");

        this.setupStatsPanel();

    },
	renderHUD: function(display) {
        // Render player stats
        
        if (this._player == null)
            this.setup();

        Game.Screen._statsHPPolyBar.style.display = "";
        Game.Screen._statsHPText.style.display = "";
        Game.Screen._statsHPPolyBarBackground.style.display = "";

        Game.Screen._statsXPPolyBar.style.display = "";
        Game.Screen._statsXPText.style.display = "";
        Game.Screen._statsXPPolyBarBackground.style.display = "";

        Game.Screen._statsVerboseTextLeft.style.display = "";
        Game.Screen._statsVerboseTextLeft.innerHTML = Game.Screen._statsVerboseTextLeftText;
        Game.Screen._statsVerboseTextRight.style.display = "";
        Game.Screen._statsVerboseBackground.style.display = "";

        Game.Screen._statsHPPolyBar.style.width = ((this._player.getHp() / this._player.getMaxHp()) * 227) + "px";
        Game.Screen._statsHPText.innerHTML = vsprintf('%d/%d', [this._player.getHp(), this._player.getMaxHp()]);

        Game.Screen._statsXPPolyBar.style.width = ((this._player.getExperience() / this._player.getNextLevelExperience()) * 227) + "px";
        Game.Screen._statsXPText.innerHTML = vsprintf('%d/%d', [this._player.getExperience(), this._player.getNextLevelExperience()]);

        var statsRight = this._player.getLevel() + "<br>";
        statsRight += this._player.getAttackValue() + "<br>";
        statsRight += this._player.getDefenseValue() + "<br>";
        statsRight += this._player.getCritValue() + "%<br>";
        statsRight += this._player.getDodgeValue() + "%<br>";
        statsRight += this._player.getHitValue() + "%<br>";
        statsRight += this._player.getParryValue() + "%<br>";
        statsRight += this._player.getHungerState();

        Game.Screen._statsVerboseTextRight.innerHTML = statsRight;
	},
    setupStatsPanel: function() {

        //HP Bar
        Game.Screen._statsHPPolyBarBackground = document.createElement("div");
        Game.Screen._statsHPPolyBarBackground.id = "statsHPPolyBarBackground";
        Game.Screen._statsHPPolyBarBackground.style.display = "none";

        Game.Screen._statsHPPolyBar = document.createElement("img");
        Game.Screen._statsHPPolyBar.id = "statsHPPolyBar";
        Game.Screen._statsHPPolyBar.src = "assets/images/misc/polybar_red.png";
        Game.Screen._statsHPPolyBar.style.display = "none";

        Game.Screen._statsHPText = document.createElement("p");
        Game.Screen._statsHPText.id = "statsHPText";
        Game.Screen._statsHPText.style.display = "none";

        Game.Screen._statsText = document.createElement("p");
        Game.Screen._statsText.id = "canvasStatsText";

        Game.Screen._statsHPPolyBarBackground.appendChild(Game.Screen._statsHPPolyBar);
        Game.Screen._statsHPPolyBarBackground.appendChild(Game.Screen._statsHPText);

        //XP Bar
        Game.Screen._statsXPPolyBarBackground = document.createElement("div");
        Game.Screen._statsXPPolyBarBackground.id = "statsXPPolyBarBackground";
        Game.Screen._statsXPPolyBarBackground.style.display = "none";

        Game.Screen._statsXPPolyBar = document.createElement("img");
        Game.Screen._statsXPPolyBar.id = "statsXPPolyBar";
        Game.Screen._statsXPPolyBar.src = "assets/images/misc/polybar_yellow.png";
        Game.Screen._statsXPPolyBar.style.display = "none";

        Game.Screen._statsXPText = document.createElement("p");
        Game.Screen._statsXPText.id = "statsXPText";
        Game.Screen._statsXPText.style.display = "none";

        Game.Screen._statsXPPolyBarBackground.appendChild(Game.Screen._statsXPPolyBar);
        Game.Screen._statsXPPolyBarBackground.appendChild(Game.Screen._statsXPText);

        //Verbose stats
        Game.Screen._statsVerboseBackground = document.createElement("div");
        Game.Screen._statsVerboseBackground.id = "statsVerboseBackground";
        Game.Screen._statsVerboseBackground.style.display = "none";

        Game.Screen._statsVerboseTextLeft = document.createElement("p");
        Game.Screen._statsVerboseTextLeft.id = "statsVerboseTextLeft";
        Game.Screen._statsVerboseTextLeft.style.display = "none";

        Game.Screen._statsVerboseTextRight = document.createElement("p");
        Game.Screen._statsVerboseTextRight.id = "statsVerboseTextRight";
        Game.Screen._statsVerboseTextRight.style.display = "none";

        Game.Screen._statsVerboseBackground.appendChild(Game.Screen._statsVerboseTextLeft);
        Game.Screen._statsVerboseBackground.appendChild(Game.Screen._statsVerboseTextRight);

        //Append the main divs to the stats div
        Game.Screen._canvasStats.appendChild(Game.Screen._statsHPPolyBarBackground);
        Game.Screen._canvasStats.appendChild(Game.Screen._statsXPPolyBarBackground);
        Game.Screen._canvasStats.appendChild(Game.Screen._statsVerboseBackground);
    }
};