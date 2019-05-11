import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  COLOR_BG
} = SETTINGS

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
