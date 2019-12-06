Game.Screen.divStats = {
	renderHUD: function(display) {
        // Render player stats
        
        this._player = Game.Screen.playScreen._player;

        statsVerboseTextLeft = document.getElementById("statsVerboseTextLeft");
        statsVerboseTextRight = document.getElementById("statsVerboseTextRight");

        statsHPPolyBar = document.getElementById("statsHPPolyBar");
        statsHPText = document.getElementById("statsHPText");

        statsXPPolyBar = document.getElementById("statsXPPolyBar");
        statsXPText = document.getElementById("statsXPText");

        if (statsHPPolyBar) {
            if (statsHPPolyBar.style.display == "none") {

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

            }

            statsHPPolyBar.style.width = ((this._player.getHp() / this._player.getMaxHp()) * 227) + "px";
            statsHPText.innerHTML = vsprintf('%d/%d', [this._player.getHp(), this._player.getMaxHp()]);

            statsXPPolyBar.style.width = ((this._player.getExperience() / this._player.getNextLevelExperience()) * 227) + "px";
            statsXPText.innerHTML = vsprintf('%d/%d', [this._player.getExperience(), this._player.getNextLevelExperience()]);
        }

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
	}
};