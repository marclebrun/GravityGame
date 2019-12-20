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
        this.motors = {
            left : 0,
            right: 0,
            down : 0
        }
    }

    update() {
        // update speed according to motors
        if(this.motors.left) {
            this.speed.X += 5;
        }
        if(this.motors.right) {
            this.speed.X -= 5;
        }
        if(this.motors.down) {
            this.speed.Y -= 5;
        }
    
        // update position
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
            this.speed.Y += 3;
    }

    draw(ctx) {
        ctx.drawImage(this.image,
            this.pos.X, this.pos.Y, this.size.X, this.size.Y);
        ctx.strokeStyle = "white";
        ctx.strokeText(`speed.X: ${this.speed.X.toFixed(2)}`, 10, 10);
        ctx.strokeText(`speed.Y: ${this.speed.Y.toFixed(2)}`, 100, 10);
        ctx.strokeText(`pos.X: ${this.pos.X.toFixed(2)}`, 190, 10);
        ctx.strokeText(`pos.Y: ${this.pos.Y.toFixed(2)}`, 280, 10);
    }

    leftMotorStart() {
        this.motors.left = 1;
    }

    leftMotorStop() {
        this.motors.left = 0;
    }

    rightMotorStart() {
        this.motors.right = 1;
    }

    rightMotorStop() {
        this.motors.right = 0;
    }

    downMotorStart() {
        this.motors.down = 1;
    }

    downMotorStop() {
        this.motors.down = 0;
    }

}