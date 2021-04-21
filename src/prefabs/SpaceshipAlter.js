//MOD: New Spaceship
class SpaceshipAlter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to the scene
        this.points = pointValue; // store the point vaule of the ship
        //MOD: Random Direction
        this.moveSpeed = 6;   //speed in pixels
    }

    //MOD: Increase Speed
    increaseSpeed(){
        this.moveSpeed = this.moveSpeed * 2;
    }

    update(){
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from the left to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width * 6;
    }
}