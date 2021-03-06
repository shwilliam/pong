import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'
import SETTINGS from '../settings'

const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  COLOR_ACCENT
} = SETTINGS

export default class CenterLine {
  constructor () {
    this.$centerLine = makeEl('line')
    setAttr(this.$centerLine, 'x1', BOARD_WIDTH / 2)
    setAttr(this.$centerLine, 'x2', BOARD_WIDTH / 2)
    setAttr(this.$centerLine, 'y1', 0)
    setAttr(this.$centerLine, 'y2', BOARD_HEIGHT)
    setAttr(this.$centerLine, 'stroke', COLOR_ACCENT)
    setAttr(this.$centerLine, 'stroke-width', 4)
    setAttr(this.$centerLine, 'stroke-dasharray', '15')
  }

  get el () {
    return this.$centerLine
  }
}
