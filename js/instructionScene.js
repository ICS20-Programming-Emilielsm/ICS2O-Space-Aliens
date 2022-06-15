/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: Jun 2022
// This is the instruction scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({key: 'instructionScene'})

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    
    // set the background colour to white
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Instruction Scene")
    this.load.image('instructionSceneBackground', './assets/instructions.jpeg')
    this.load.image('leftButton', './assets/back.png')
    
  }

  // locations of background, button and text
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(4,4)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // back button
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 90, 'leftButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
    // Instructions
    this.menuSceneText = this.add.text(1920 / 2, (1170 / 2) + 350, 'Use the SPACE BAR to kill, and use the LEFT and RIGHT arrow keys to avoid', this.titleSceneTextStyle).setOrigin(0.5).setScale(2)

    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Point of the game  - splash to destroy the cats before they eat you', this.titleSceneTextStyle).setOrigin(0.5).setScale(2)
  }

  update (time, delta) {
  }

  // when button is clicked
  clickButton () {
    this.scene.start('menuScene')
  }

}

export default InstructionScene