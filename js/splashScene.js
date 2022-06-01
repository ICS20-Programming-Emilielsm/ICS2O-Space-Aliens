/* global Phaser*/

class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: 'splashScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#fffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene