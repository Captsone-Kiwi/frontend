var pathArray = window.location.pathname.split('/');

if(pathArray[1] == "main"){

    (function() {
        //Initialization
        var game = new gdjs.RuntimeGame(gdjs.projectData, {});

        //Create a renderer
        game.getRenderer().createStandardCanvas(document.body);

        //Bind keyboards/mouse/touch events
        game.getRenderer().bindStandardEvents(game.getInputManager(), window, document);

        //Load all assets and start the game
        game.loadAllAssets(function() {
            game.startGameLoop();
        });
    })();
}