import SpaceShip from "./SpaceShip.js";

export default class Game {

    constructor() {
        this.canvas = document.getElementById("gamescreen");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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

}