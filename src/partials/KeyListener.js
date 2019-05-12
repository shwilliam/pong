export default class KeyListener {
  constructor () {
    this.activeKeys = []
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
    document.addEventListener('keyup', this.handleKeyUp.bind(this))
  }

  handleKeyDown (e) {
    !this.activeKeys.includes(e.key) &&
       this.activeKeys.push(e.key)
  }

  handleKeyUp (e) {
    this.activeKeys.includes(e.key) &&
      this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1)
  }
}
