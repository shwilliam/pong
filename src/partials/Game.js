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
import Paddle from './Paddle'
import Ball from './Ball'

export default class Game {
  constructor (element) {
    this.$svg = makeEl('svg')
    setAttr(this.$svg, 'width', BOARD_WIDTH)
    setAttr(this.$svg, 'height', BOARD_HEIGHT)
    setAttr(this.$svg, 'viewbox', `0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`)

    this.$container = document.getElementById(element)
    this.$container.appendChild(this.$svg)

    this.board = new Board()
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
    this.ball = new Ball()
  }

  render (el) {
    console.log('render game')
    this.board.render(this.$svg)
    this.paddleLeft.render(this.$svg)
    this.paddleRight.render(this.$svg)
    this.ball.render(this.$svg)
  }
}
