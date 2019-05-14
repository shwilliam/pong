import KeyListener from './KeyListener'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  COLOR_ACCENT,
  BOARD_HEIGHT
} = SETTINGS

export default class Paddle extends KeyListener {
  constructor (x, initialY, keyDown, keyUp) {
    super()
    this.x = x
    this.y = initialY
    this.keyDown = keyDown
    this.keyUp = keyUp
    this.paused = false
    this.paused = true
    this.$paddle = makeEl('rect')
    setAttr(this.$paddle, 'x', x)
    setAttr(this.$paddle, 'width', PADDLE_WIDTH)
    setAttr(this.$paddle, 'height', PADDLE_HEIGHT)
    setAttr(this.$paddle, 'fill', COLOR_ACCENT)
  }

  getCoordinates () {
    return {
      left: this.x,
      top: this.y,
      right: this.x + PADDLE_WIDTH,
      bottom: this.y + PADDLE_HEIGHT
    }
  }

  checkMove () {
    if (!this.paused) {
      this.activeKeys.includes(this.keyDown) && this.move(PADDLE_SPEED)
      this.activeKeys.includes(this.keyUp) && this.move(-PADDLE_SPEED)
    }
  }

  move (distance) {
    if (this.y + distance < BOARD_HEIGHT - PADDLE_HEIGHT &&
      this.y + distance > 0) {
      this.y += distance
    } else if (distance > 0) {
      this.y = BOARD_HEIGHT - PADDLE_HEIGHT
    } else {
      this.y = 0
    }
  }

  get el () {
    return this.$paddle
  }

  update (paused) {
    this.paused = paused
    this.checkMove()
    setAttr(this.$paddle, 'y', this.y)
  }
}
