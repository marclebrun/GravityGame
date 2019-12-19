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
        this.defaultSpeed = {
            X: 0,
            Y: 50
        }
        this.speed = {
            X: this.defaultSpeed.X,
            Y: this.defaultSpeed.Y
        }
    }

    update() {
        this.pos.X += (this.speed.X / 100);
        this.pos.Y += (this.speed.Y / 100);

        // decrease horizontal speed
        if(this.speed.X > this.defaultSpeed.X)
            this.speed.X -= 1;
        if(this.speed.X < this.defaultSpeed.X)
            this.speed.X += 1;

        // decrease vertical speed
        if(this.speed.Y > this.defaultSpeed.Y)
            this.speed.Y -= 1;
        if(this.speed.Y < this.defaultSpeed.Y)
            this.speed.Y += 1;
    }

    draw(ctx) {
        ctx.drawImage(this.image,
            this.pos.X, this.pos.Y, this.size.X, this.size.Y);
        ctx.strokeStyle = "white";
        ctx.strokeText(`speed.X: ${this.speed.X.toFixed(2)}`, 10, 10);
        ctx.strokeText(`pos.X: ${this.pos.X.toFixed(2)}`, 10, 20);
    }

    addSpeedLeft() {
        this.speed.X -= 5;
    }

    addSpeedRight() {
        this.speed.X += 5;
    }

    addSpeedUp() {
        this.speed.Y -= 5;
    }

}