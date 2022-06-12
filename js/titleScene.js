/* global Phaser*/
/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Emilie
// Created by:Emilie
// Created on: Jun 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#8CB29F')
  }

  // console message
  preload () {
    console.log("Emilie's Title Scene")
    this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
  }

  // background image
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Cat and Mouse', this.titleSceneTextStyle).setOrigin(0.5)
  }

  // time 
   update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene