// Define our initial start screen
Game.Screen.startScreen = {
    enter: function() {    console.log(loc.StartScreenEnter); },
    exit: function() { console.log(loc.StartScreenExit); },
    render: function(display) {
        // Render our prompt to the screen
        display.drawText(1,1, loc.StartScreenGameTitle);
        display.drawText(1,2, loc.StartScreenGameDesc);
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