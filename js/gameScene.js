/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Emilie
// Created by:Emilie
// Created on: Jun 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Emilie's Game Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default GameScene