Game.Screen.divLog = {
    renderMessages: function() {
        // Get the messages in the player's queue and render them
        var messages = Game._player.getMessages();

        if (Game.Screen._canvasLog == null)
            Game.Screen._canvasLog = document.getElementById("canvasLog");

        if (Game.Screen._canvasLogText == null) {
            Game.Screen._canvasLogText = document.getElementById("canvasLogText");
        }

        Game.Screen._canvasLogText.innerHTML = "";

        for (var i = 0; i < messages.length; i++) {
            if (typeof messages[i] !== 'undefined') {
                    Game.Screen._canvasLogText.innerHTML += messages[i] + "<br>";
            }    
        }
    }
};