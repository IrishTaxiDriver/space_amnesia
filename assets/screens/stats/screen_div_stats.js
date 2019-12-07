Game.Screen.divStats = {
	renderHUD: function(display) {
        // Render player stats
        
        this._player = Game.Screen.playScreen._player;

        if (!document.getElementById("statsVerboseTextLeft"))
            this.setupStatsPanel(document.getElementById("canvasStats"));

        statsVerboseTextLeft = document.getElementById("statsVerboseTextLeft");
        statsVerboseTextRight = document.getElementById("statsVerboseTextRight");

        statsHPPolyBar = document.getElementById("statsHPPolyBar");
        statsHPText = document.getElementById("statsHPText");

        statsXPPolyBar = document.getElementById("statsXPPolyBar");
        statsXPText = document.getElementById("statsXPText");

        statsHPPolyBar.style.display = "";
        statsHPText.style.display = "";
        document.getElementById("statsHPPolyBarBackground").style.display = "";

        statsXPPolyBar.style.display = "";
        statsXPText.style.display = "";
        document.getElementById("statsXPPolyBarBackground").style.display = "";

        statsVerboseTextLeft.style.display = "";
        statsVerboseTextLeft.innerHTML = "Level:<br>Attack:<br>Defense:<br>Crit:<br>Dodge:<br>Hit:<br>Parry:<br>";
        statsVerboseTextRight.style.display = "";
        document.getElementById("statsVerboseBackground").style.display = "";

        statsHPPolyBar.style.width = ((this._player.getHp() / this._player.getMaxHp()) * 227) + "px";
        statsHPText.innerHTML = vsprintf('%d/%d', [this._player.getHp(), this._player.getMaxHp()]);

        statsXPPolyBar.style.width = ((this._player.getExperience() / this._player.getNextLevelExperience()) * 227) + "px";
        statsXPText.innerHTML = vsprintf('%d/%d', [this._player.getExperience(), this._player.getNextLevelExperience()]);

        var statsRight = this._player.getLevel() + "<br>";
        statsRight += this._player.getAttackValue() + "<br>";
        statsRight += this._player.getDefenseValue() + "<br>";
        statsRight += this._player.getCritValue() + "%<br>";
        statsRight += this._player.getDodgeValue() + "%<br>";
        statsRight += this._player.getHitValue() + "%<br>";
        statsRight += this._player.getParryValue() + "%<br>";
        statsRight += this._player.getHungerState();

        if (statsVerboseTextRight)
            statsVerboseTextRight.innerHTML = statsRight;
	},
    setupStatsPanel: function(stats) {
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
    }
};