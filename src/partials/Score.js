import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  BOARD_WIDTH,
  COLOR_ACCENT,
  FONT_FAMILY,
  FONT_SIZE,
  SCORE_LIMIT
} = SETTINGS

export default class Score {
  constructor (onFinish) {
    this.score = [0, 0]
    this.onFinish = onFinish

    this.$score = makeEl('text')
    setAttr(this.$score, 'fill', COLOR_ACCENT)
    setAttr(this.$score, 'x', BOARD_WIDTH / 2 - 45) // TODO: fix score x pos
    setAttr(this.$score, 'y', 30)
    setAttr(this.$score, 'font-family', FONT_FAMILY)
    setAttr(this.$score, 'font-size', FONT_SIZE)
  }

  checkWinner () {
    const highestScore = Math.max(...this.score)

    if (highestScore >= SCORE_LIMIT) {
      this.winner = this.score.indexOf(highestScore) + 1
      this.onFinish(this.reset.bind(this))
    }
  }

  increaseScore (i) {
    this.score[i] += 1
    this.checkWinner()
  }

  reset () {
    this.score = [0, 0]
    this.winner = null
  }

  get el () {
    return this.$score
  }

  update () {
    this.$score.textContent = this.winner
      ? `Player ${this.winner} wins!`
      : `${this.score[0]} - ${this.score[1]}`
  }
}
