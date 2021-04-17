class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to the scene
        this.points = pointValue; // store the point vaule of the ship
        this.moveSpeed = 3;   //speed in pixels
    }

    update(){
        // move spaceship elft
        this.x -= this.moveSpeed;
        // wrap around from the left to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}