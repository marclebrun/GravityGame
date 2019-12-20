import SpaceShip from "./SpaceShip.js";

const KEY_ARROW_LEFT  = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN  = 40;
const KEY_ARROW_UP    = 38;

export default class Game {

    constructor() {
        this.canvas = document.getElementById("gamescreen");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.addEventListener("keydown", event => {
            this.keyDown(event.keyCode);
        });

        document.addEventListener("keyup", event => {
            this.keyUp(event.keyCode);
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

    keyDown(keyCode) {
        switch(keyCode) {
            case KEY_ARROW_LEFT:
                this.spaceShip.rightMotorStart();
                break;
            case KEY_ARROW_RIGHT:
                this.spaceShip.leftMotorStart();
                break;
            case KEY_ARROW_UP:
                this.spaceShip.downMotorStart();
                break;
        }
    }

    keyUp(keyCode) {
        switch(keyCode) {
            case KEY_ARROW_LEFT:
                this.spaceShip.rightMotorStop();
                break;
            case KEY_ARROW_RIGHT:
                this.spaceShip.leftMotorStop();
                break;
            case KEY_ARROW_UP:
                this.spaceShip.downMotorStop();
                break;
        }
    }

}