/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Emilie
// Created by:Emilie
// Created on: Jun 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})
    // preset values
    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Menu Scene")
    this.load.image('menuSceneBackground', 'assets/aliens_screen_image2.jpg')
    this.load.image('startButton', 'assets/start.PNG')
    this.load.image('instructionButton', 'assets/inbutton.png')
  }

  // background image
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // start button
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton()).setScale(0.5)

    // text information
    this.menuSceneText = this.add.text(1920 / 2, (900 / 2) + 350, 'Use SPACE BAR to kill, and use the arrow keys to aviod those nasty beasts',                                this.titleSceneTextStyle).setOrigin(0.5).setScale(2)

    // instrcution button
    this.instructionButton = this.add.sprite(490 / 2, (30 / 2) + 100, 'instructionButton').setScale(0.3)
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on('pointerdown', () => this.instructClickButton())
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }

  // when button is clicked
  instructClickButton () {
    this.scene.start('instructionScene')
  }
  
}

export default MenuScene