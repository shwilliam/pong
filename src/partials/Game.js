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
  KEYS,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  SINGLE_PLAYER
} = SETTINGS

export default class Game {
  constructor (element) {
    // create svg el
    this.$svg = makeEl('svg')
    setAttr(this.$svg, 'width', BOARD_WIDTH)
    setAttr(this.$svg, 'height', BOARD_HEIGHT)
    setAttr(this.$svg, 'viewbox', `0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`)

    // set up pause listener
    this.paused = true
    document.addEventListener(
      'keydown',
      e => {
        if (e.key === ' ' && this.finished) {
          this.finished = false
          this.reset()
        } else if (e.key === ' ' && !this.hardPaused) {
          this.pause(!this.paused)
        }
      }
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
    this.score = new Score(this.finish.bind(this))
    this.ball = new Ball(this.score.increaseScore.bind(this.score))
    this.ball.update(
      this.paddleLeft.coordinates,
      this.paddleRight.coordinates
    )
    this.settings = new SettingsModal('settings-toggle', this.hardPause.bind(this))

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

  hardPause (val) {
    // cannot unpause with SPACE
    this.hardPaused = val
    this.paused = true
  }

  finish (reset) {
    this.finished = true
    this.reset = reset
  }

  update () {
    if (this.finished) return

    this.ball.update(
      this.paused,
      this.paddleLeft.coordinates,
      this.paddleRight.coordinates
    )
    this.paddleLeft.update(this.paused)
    this.paddleRight.update(this.paused, SINGLE_PLAYER && this.ball.position)
    this.score.update()
  }
}
