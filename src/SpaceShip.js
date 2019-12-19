export default class SpaceShip {

    constructor() {
        this.image = document.getElementById("spaceship");
        this.size = {
            X: this.image.width,
            Y: this.image.height
        }
        this.pos = {
            X: 100,
            Y: 200
        }
        this.speed = {
            X: 0,
            Y: 0.5
        }
    }

    update() {
        this.pos.X += this.speed.X;
        this.pos.Y += this.speed.Y;
    }

    draw(ctx) {
        ctx.drawImage(this.image,
            this.pos.X, this.pos.Y, this.size.X, this.size.Y);
    }

}