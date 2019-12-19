import Game from "./Game.js";

let game = new Game();

// let count = 0;
// const max = 5000;

game.start();

function gameLoop(timestamp) {
    game.update();
    game.draw();
    // if(++count < max)
        requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
