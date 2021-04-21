/*  Matthew Hoover
    Rocket Patrol Mods
    4/21/2021
*/
// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, p, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        //MOD: 2 Player code switching
        this.player = p;
    }

    update() {
        // left/right movement
        //MOD: Movement while Launching, removed the (!.isFiring) if statement
        if(this.player === 0 && keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (this.player === 0 && keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        } else if(this.player === 1 && keyA.isDown && this.x >= borderUISize + this.width){ //MOD: 2 Player's movement keys
            this.x -= this.moveSpeed;
        } else if (this.player === 1 && keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
        // fire button
        if(this.player === 0 && Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        } else if(this.player === 1 && Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring){ //MOD: 2 player's firing key
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
