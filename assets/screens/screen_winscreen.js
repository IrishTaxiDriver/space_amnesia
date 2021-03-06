// Define our winning screen
Game.Screen.winScreen = {
    enter: function() { console.log(loc.WinScreenEnter); },
    exit: function() { console.log(loc.WinScreenExit); },
    render: function(display) {
        // Render our prompt to the screen
        for (var i = 0; i < 22; i++) {
            // Generate random background colors
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            var background = ROT.Color.toRGB([r, g, b]);
            display.drawText(2, i + 1, "%b{" + background + "}" + loc.WinScreenYouWin);
        }
    },
    handleInput: function(inputType, inputData) {
        // Nothing to do here      
    }
};