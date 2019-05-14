import KeyListener from './KeyListener'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  COMP_DIFFICULTY,
  COMP_MAX_SPEED,
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

  get coordinates () {
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

  checkCompMove (ballPos) {
    if (!this.paused) {
      // randomized delay when direction changes
      if (Math.random() > 1 / COMP_DIFFICULTY) {
        this.move(this.yDiff)
      } else {
        this.yDiff = (this.y + (PADDLE_HEIGHT / 2)) - ballPos[1]
        // cap speed as specified in settings
        if (this.yDiff < -COMP_MAX_SPEED) {
          this.yDiff = COMP_MAX_SPEED
        } else if (this.yDiff > COMP_MAX_SPEED) {
          this.yDiff = -COMP_MAX_SPEED
        }
        this.move(this.yDiff)
      }
    }
  }

  move (distance) {
    // if not at top or bottom
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

  update (paused, ballPos) {
    this.paused = paused
    ballPos // only passed for comp paddle
      ? this.checkCompMove(ballPos)
      : this.checkMove()
    setAttr(this.$paddle, 'y', this.y)
  }
}
