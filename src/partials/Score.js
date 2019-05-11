import {
  BOARD_WIDTH,
  COLOR_ACCENT,
  FONT_FAMILY,
  FONT_SIZE
} from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Score {
  constructor () {
    this.score = [0, 0]

    this.$score = makeEl('text')
    setAttr(this.$score, 'fill', COLOR_ACCENT)
    setAttr(this.$score, 'x', BOARD_WIDTH / 2 - 45) // TODO: fix score x pos
    setAttr(this.$score, 'y', 30)
    setAttr(this.$score, 'font-family', FONT_FAMILY)
    setAttr(this.$score, 'font-size', FONT_SIZE)
  }

  increaseScore (i) {
    this.score[i] += 1
  }

  get el () {
    return this.$score
  }

  update () {
    this.$score.textContent = `${this.score[0]} - ${this.score[1]}`
  }
}
