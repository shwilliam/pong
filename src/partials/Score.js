import {
  FONT_FAMILY,
  FONT_SIZE,
  COLOR_ACCENT
} from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Score {
  constructor (x, y) {
    this.score = [0, 0]

    this.$score = makeEl('text')
    setAttr(this.$score, 'fill', COLOR_ACCENT)
    setAttr(this.$score, 'x', x)
    setAttr(this.$score, 'y', y)
    setAttr(this.$score, 'font-family', FONT_FAMILY)
    setAttr(this.$score, 'font-size', FONT_SIZE)
  }

  increaseScore (i) {
    this.score[i] += 1
  }

  render (el) {
    // console.log('render score')
    this.$score.textContent = `${this.score[0]} - ${this.score[1]}`
    if (!document.body.contains(this.$score)) el.appendChild(this.$score)
  }
}
