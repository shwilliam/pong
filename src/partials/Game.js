import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BOARD_GAP,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  KEYS
} from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

import Board from './Board'
import CenterLine from './CenterLine'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'

export default class Game {
  constructor (element) {
    this.$svg = makeEl('svg')
    setAttr(this.$svg, 'width', BOARD_WIDTH)
    setAttr(this.$svg, 'height', BOARD_HEIGHT)
    setAttr(this.$svg, 'viewbox', `0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`)

    this.$container = document.getElementById(element)
    this.$container.appendChild(this.$svg)

    this.paddleLeft = new Paddle(
      BOARD_GAP,
      (BOARD_HEIGHT - PADDLE_HEIGHT) / 2,
      KEYS.PLAYER1.DOWN,
      KEYS.PLAYER1.UP
    )
    this.paddleRight = new Paddle(
      BOARD_WIDTH - PADDLE_WIDTH - BOARD_GAP,
      (BOARD_HEIGHT - PADDLE_HEIGHT) / 2,
      KEYS.PLAYER2.DOWN,
      KEYS.PLAYER2.UP
    )
    this.score = new Score(BOARD_WIDTH / 2 - 45, 30)
    this.ball = new Ball(this.score.increaseScore.bind(this.score))

    this.paused = false
    document.addEventListener('keydown', e => {
      if (e.key === KEYS.PAUSE) {
        this.paused = !this.paused
      }
    })

    this.ball.update(
      this.paddleLeft.getCoordinates(),
      this.paddleRight.getCoordinates()
    )

    this.$svg.appendChild(new Board().el)
    this.$svg.appendChild(new CenterLine().el)
    this.$svg.appendChild(this.score.el)
    this.$svg.appendChild(this.ball.el)
    this.$svg.appendChild(this.paddleLeft.el)
    this.$svg.appendChild(this.paddleRight.el)
  }

  update () {
    if (this.paused) return

    this.paddleLeft.update()
    this.paddleRight.update()
    this.ball.update(
      this.paddleLeft.getCoordinates(),
      this.paddleRight.getCoordinates()
    )
    this.score.update()
  }
}
