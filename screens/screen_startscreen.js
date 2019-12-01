// Define our initial start screen
Game.Screen.startScreen = {
    enter: function() { console.log(loc.StartScreenEnter); },
    exit: function() { console.log(loc.StartScreenExit); },
    render: function(display) {
        // Render our prompt to the screen
        var widthCenter = (firm.Width / 2);
        var heightCenter = (firm.Height / 2);
        //The title has coloring info in the front of the string 
        display.drawText(widthCenter - ((loc.StartScreenGameTitle.length - 10) / 2),heightCenter - 1, loc.StartScreenGameTitle);
        display.drawText(widthCenter - (loc.StartScreenGameDesc.length / 2),heightCenter, loc.StartScreenGameDesc);
    },
    handleInput: function(inputType, inputData) {
        // When [Enter] is pressed, go to the play screen
        if (inputType === 'keydown') {
            if (inputData.keyCode === ROT.VK_RETURN) {
                Game.switchScreen(Game.Screen.playScreen);
            }
        }
    }
};