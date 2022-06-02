/* global Phaser*/
// title scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#8CB29F')
  }

  // console message
  preload () {
    console.log("Emilie's Title Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene