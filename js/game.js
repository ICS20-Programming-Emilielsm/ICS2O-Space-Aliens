/* global Phaser */

// Created by Emilie 
// Created on May 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'

//Our game scene
const splashScene = new SplashScene()

//*Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  // set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page 
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
//NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

//strat title
game.scene.start('splashScene')