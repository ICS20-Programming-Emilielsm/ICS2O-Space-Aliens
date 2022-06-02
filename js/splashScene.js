/* global Phaser*/

// This is a constructor 
class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: 'splashScene'})
  }

  init (data) {
    // set the background colour to grennish colour
    this.cameras.main.setBackgroundColor('#8CB29F')
  }

  // The console message and image 
 preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // switch over from slapsh scene to tile screen 
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
    this.scene.switch('titleScene')
  }
}
// show the splash scene
export default SplashScene