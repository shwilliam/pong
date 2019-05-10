import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  COLOR_ACCENT,
  COLOR_BG
} from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Board {
  constructor () {
    this.$board = makeEl('rect')
    setAttr(this.$board, 'width', BOARD_WIDTH)
    setAttr(this.$board, 'height', BOARD_HEIGHT)
    setAttr(this.$board, 'fill', COLOR_BG)

    this.$centerLine = makeEl('line')
    setAttr(this.$centerLine, 'x1', BOARD_WIDTH / 2)
    setAttr(this.$centerLine, 'x2', BOARD_WIDTH / 2)
    setAttr(this.$centerLine, 'y1', 0)
    setAttr(this.$centerLine, 'y2', BOARD_HEIGHT)
    setAttr(this.$centerLine, 'stroke', COLOR_ACCENT)
    setAttr(this.$centerLine, 'stroke-width', 4)
    setAttr(this.$centerLine, 'stroke-dasharray', '15')
  }

  render (el) {
    // console.log('render board')
    el.appendChild(this.$board)
    el.appendChild(this.$centerLine)
  }
}
