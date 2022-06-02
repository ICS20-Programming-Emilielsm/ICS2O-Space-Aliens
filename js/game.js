/* global Phaser */

// Created by Emilie 
// Created on May 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

//Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//*Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background colour (yellow)
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page 
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

// an edit of our constant game 
const game = new Phaser.Game(config)

// load scenes
//NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

//strat title
game.scene.start('splashScene')