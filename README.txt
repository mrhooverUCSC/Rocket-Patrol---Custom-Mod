Matthew Hoover, 4/16/2021
UCSC - CMPM 120, Game Design Experience: 2021 Spring Quarter

Modifications:
Two Player - 30 Points
  A/D for Left/Right movement, W for fire.
  Changed [Rocket.js] to have another pass in variable, "player", which is 0 or 1.  Determines which keys it traces for commands.
Movement While Launching - 5 Points 
  Removed the (!.isFiring) if statement in the [Rocket.js] class
Randomize Movement Direction At Start - 5 Points
  Random value of 0 or 1 at intilization: If 1, moves to the right, flips the sprite, and resets on the right side.

Progress:
double check the timer


Notes:
setOrigin appears to do nothing for the rocket's position?  It only depends on the 'game.config...' area in [Play.js]