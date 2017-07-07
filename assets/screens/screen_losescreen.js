// Define our winning screen
Game.Screen.loseScreen = {
    enter: function() {    console.log(loc.LoseScreenEnter); },
    exit: function() { console.log(loc.LoseScreenExit); },
    render: function(display) {
        // Render our prompt to the screen
        for (var i = 0; i < 22; i++) {
            display.drawText(2, i + 1, "%b{red}" + loc.LoseScreenYouLose);
        }
    },
    handleInput: function(inputType, inputData) {
        // Nothing to do here      
    }
};