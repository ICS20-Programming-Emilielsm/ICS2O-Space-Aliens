/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Emilie
// Created by:Emilie
// Created on: Jun 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {

  // create and cat
  createAlien () {
    const catXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
    let catXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
    catXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(catXLocation, -100, 'cat')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = catXVelocity
    this.catGroup.add(anAlien)
    
  }

  // This is the preset variables of each part in the game scene
  constructor () {
    super({key: 'gameScene'})

    this.titleSceneBackgroundImage = null
    this.mouse = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center'}

    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }

  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Emilie's Game Scene")
    //images
    this.load.image('starBackground', 'assets/starBackground.jpg')
    this.load.image('mouse', 'assets/mouse.png')
    this.load.image('water', 'assets/water.png')
    this.load.image('cat', 'assets/cat.png')

    // sound 
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
    this.load.audio('bomb', 'assets/bomb.wav')

  }
  
  // Background image
  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    // score
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
    
    // SPACE SHIP STARTING LOCATION 
    this.mouse = this.physics.add.sprite(1920 / 2, 1080 - 100, 'mouse')

    // group for waters
    this.waterGroup = this.physics.add.group()

    // create a group for the cats
    this.catGroup = this.add.group()
    this.createAlien()

    // the physics of the collisions
    this.physics.add.collider(this.waterGroup, this.catGroup, function (waterCollide, catCollide) {
      catCollide.destroy()
      waterCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createAlien()
      this.createAlien()
    }.bind(this))

    // Collisions between mouse and cats
    this.physics.add.collider(this.mouse, this.catGroup, function (mouseCollide, catCollide) {
      this.sound.play('bomb')
      this.physics.pause()
      catCollide.destroy()
      mouseCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Better luck next time !\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this))
    
  }

  update (time, delta) {
    // called 60 times a second
    //movement commands
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.mouse.x -= 15
      if (this.mouse.x < 0) {
        this.mouse.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.mouse.x += 15
      if (this.mouse.x > 1920) {
        this.mouse.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire water
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.mouse.x, this.mouse.y, 'water')
        this.waterGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }
    
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.waterGroup.children.each(function (item){
      
    item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })
  }
}

export default GameScene