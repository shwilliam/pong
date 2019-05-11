import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
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
  }

  get el () {
    return this.$board
  }
}
