/*  Matthew Hoover
    Rocket Patrol Mods
    4/21/2021
    Mod List:
    30 Points - 2 Player: Player 2's controls are A/D/W
    5 Points - Movement while Launching
    5 Points - Randomize Movement Direction for Spaceships
    20 Points - Alter Spaceship: New SpaceshipAlter class is a faster
         spaceship worth more points and is only on screen for a small amount of time
    20 Points - Time gain On Hit: +3 Seconds per spaceship destroyed
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

//MOD: Player 2's keys
let keyW, keyA, keyD;