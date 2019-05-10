import { BALL_RADIUS, BOARD_WIDTH, BOARD_HEIGHT, COLOR_ACCENT } from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Ball {
  constructor () {
    this.$ball = makeEl('circle')
    setAttr(this.$ball, 'r', BALL_RADIUS)
    setAttr(this.$ball, 'fill', COLOR_ACCENT)
    this.reset()
  }

  checkGoal () {
    if (this.x <= 0) {
      this.vx *= -1
      this.reset()
    } else if (this.x >= BOARD_WIDTH) {
      this.vx *= -1
      this.reset()
    }
  }

  checkWallCollision (paddles) {
    const atTop = this.y - BALL_RADIUS <= 0
    const atBottom = this.y + BALL_RADIUS >= BOARD_HEIGHT

    if (atTop || atBottom) this.vy *= -1

    const [paddleLeft, paddleRight] = paddles
    if (this.vx > 0) {
      if (this.x + BALL_RADIUS >= paddleRight.left &&
        this.y <= paddleRight.bottom &&
        this.y >= paddleRight.top) {
        this.vx *= -1
      }
    } else if (this.x - BALL_RADIUS <= paddleLeft.right &&
      this.y <= paddleLeft.bottom &&
      this.y >= paddleLeft.top) {
      this.vx *= -1
    }
  }

  reset () {
    this.x = BOARD_WIDTH / 2
    this.y = BOARD_HEIGHT / 2

    while (!this.vx || this.vx === 0) {
      this.vx = Math.floor(Math.random() * 10 - 5)
    }
    this.vy = (6 - Math.abs(this.vx))
  }

  render (el, ...paddles) {
    // console.log('render ball')
    setAttr(this.$ball, 'cx', this.x)
    setAttr(this.$ball, 'cy', this.y)
    el.appendChild(this.$ball)
    this.x += this.vx
    this.y += this.vy
    this.checkWallCollision(paddles)
    this.checkGoal()
  }
}
