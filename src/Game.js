import SpaceShip from "./SpaceShip.js";

export default class Game {

    constructor() {
        this.canvas = document.getElementById("gamescreen");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.addEventListener("keydown", event => {
            console.log('event.keyCode: ' + event.keyCode);
            switch(event.keyCode) {
                case 37: this.leftKey();  break;
                case 38: this.upKey();    break;
                case 39: this.rightKey(); break;
            }
        });

    }

    start() {
        this.spaceShip = new SpaceShip();
    }

    update() {
        this.spaceShip.update();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.spaceShip.draw(this.context);
    }

    leftKey() {
        this.spaceShip.addSpeedLeft();
    }

    rightKey() {
        this.spaceShip.addSpeedRight();
    }

    upKey() {
        this.spaceShip.addSpeedUp();
    }

}