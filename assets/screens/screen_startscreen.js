// Define our initial start screen
Game.Screen.startScreen = {
    enter: function() { console.log(loc.StartScreenEnter); },
    exit: function() { console.log(loc.StartScreenExit); },
    render: function(display) {
        // Render our prompt to the screen
        var widthCenter = (firm.Width / 2);
        var heightCenter = (firm.Height / 2);
        //The title has coloring info in the front of the string
        //display.drawText(widthCenter - ((loc.StartScreenGameTitle.length - 10) / 2),heightCenter - 1, loc.StartScreenGameTitle);
        //display.drawText(widthCenter - (loc.StartScreenGameDesc.length / 2),heightCenter, loc.StartScreenGameDesc);
        this.getDisplays();
        Game.Screen._canvas.style.display = "none";
        Game.Screen._canvasStart.style.display = "";
        Game.Screen._canvasStats.style.display = "none";
        Game.Screen._canvasInventory.style.display = "none";
        Game.Screen._canvasLog.style.display = "none"; 
    },
    handleInput: function(inputType, inputData) {
        // When [Enter] is pressed, go to the play screen
        if (inputType === 'keydown') {
            if (inputData.keyCode === ROT.VK_RETURN) {
                Game.Screen._canvasStart.style.display = "none";
                Game.Screen._canvas.style.display = "";
                Game.Screen._canvasStats.style.display = "";
                Game.Screen._canvasInventory.style.display = "";
                Game.Screen._canvasLog.style.display = ""; 
                Game.switchScreen(Game.Screen.playScreen);
            }
        }
    },
    getDisplays: function() {

        if (!Game.Screen._canvas)
            Game.Screen._canvas = document.getElementsByTagName("canvas")[0];

        if (!Game.Screen._canvasStats)
            Game.Screen._canvasStats = document.getElementById("canvasStats");

        if (!Game.Screen._canvasInventory)
            Game.Screen._canvasInventory = document.getElementById("canvasInventory");

        if (!Game.Screen._canvasLog)
            Game.Screen._canvasLog = document.getElementById("canvasLog");

    }
};