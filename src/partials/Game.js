import Board from './Board'
import CenterLine from './CenterLine'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'
import SettingsModal from './SettingsModal'

import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BOARD_GAP,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  KEYS
} = SETTINGS

export default class Game {
  constructor (element) {
    // create svg el
    this.$svg = makeEl('svg')
    setAttr(this.$svg, 'width', BOARD_WIDTH)
    setAttr(this.$svg, 'height', BOARD_HEIGHT)
    setAttr(this.$svg, 'viewbox', `0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`)

    // set up pause listener
    this.paused = false
    document.addEventListener(
      'keydown',
      e => e.key === KEYS.PAUSE &&
        this.pause(!this.paused)
    )

    // init game components
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
    this.score = new Score()
    this.ball = new Ball(this.score.increaseScore.bind(this.score))
    this.ball.update(
      this.paddleLeft.getCoordinates(),
      this.paddleRight.getCoordinates()
    )
    new SettingsModal('settings-toggle', this.pause.bind(this))

    // append game components to svg
    this.$svg.appendChild(new Board().el)
    this.$svg.appendChild(new CenterLine().el)
    this.$svg.appendChild(this.score.el)
    this.$svg.appendChild(this.ball.el)
    this.$svg.appendChild(this.paddleLeft.el)
    this.$svg.appendChild(this.paddleRight.el)

    // render svg
    this.$container = document.getElementById(element)
    this.$container.appendChild(this.$svg)
  }

  pause (val) {
    this.paused = val
  }

  update () {
    this.ball.update(
      this.paused,
      this.paddleLeft.getCoordinates(),
      this.paddleRight.getCoordinates()
    )
    this.paddleLeft.update(this.paused)
    this.paddleRight.update(this.paused)
    this.score.update()
  }
}
