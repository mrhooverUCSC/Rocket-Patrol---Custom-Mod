class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to the scene
        this.points = pointValue; // store the point vaule of the ship
        //MOD: Random Direction
        this.direction = Phaser.Math.Between(0, 1);
        if(this.direction === 1){
            this.x = -x + game.config.width;
            this.setFlip(true, false);
        }
        this.moveSpeed = 3;   //speed in pixels
    }

    //MOD: Increase Speed
    increaseSpeed(){
        this.moveSpeed = this.moveSpeed * 2;
    }

    update(){
        if(this.direction === 0){
            // move spaceship left
            this.x -= this.moveSpeed;
            // wrap around from the left to right edge
            if(this.x <= 0 - this.width){
                this.reset();
            }
        }
        else{
            this.x += this.moveSpeed;
            if(this.x >= game.config.width){
                this.reverseReset();
            }
        }
    }

    reset(){
        this.x = game.config.width;
    }

    reverseReset(){
        this.x = 0 - this.width;
    }
}
