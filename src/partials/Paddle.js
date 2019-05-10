import { PADDLE_WIDTH, PADDLE_HEIGHT, COLOR_ACCENT, BOARD_HEIGHT, PADDLE_SPEED } from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Paddle {
  constructor (x, initialY, keyDown, keyUp) {
    this.x = x
    this.y = initialY
    this.$paddle = makeEl('rect')
    setAttr(this.$paddle, 'x', x)
    setAttr(this.$paddle, 'width', PADDLE_WIDTH)
    setAttr(this.$paddle, 'height', PADDLE_HEIGHT)
    setAttr(this.$paddle, 'fill', COLOR_ACCENT)

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case keyDown:
          this.move(PADDLE_SPEED)
          break
        case keyUp:
          this.move(-PADDLE_SPEED)
          break
      }
    })
  }

  getCoordinates () {
    return {
      left: this.x,
      top: this.y,
      right: this.x + PADDLE_WIDTH,
      bottom: this.y + PADDLE_HEIGHT
    }
  }

  move (distance) {
    if (this.y + distance < BOARD_HEIGHT - PADDLE_HEIGHT &&
      this.y + distance > 0) {
      this.y += distance
    }
  }

  render (el) {
    // console.log('render paddle')
    setAttr(this.$paddle, 'y', this.y)
    el.appendChild(this.$paddle)
  }
}
