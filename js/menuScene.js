/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Emilie
// Created by:Emilie
// Created on: Jun 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})

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
    this.load.image('startButton', 'assets/start.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Use Space, and arrows to move', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene