import { BOARD_WIDTH, BOARD_HEIGHT, COLOR_ACCENT } from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Ball {
  constructor () {
    this.$ball = makeEl('circle')
    setAttr(this.$ball, 'cx', BOARD_WIDTH / 2)
    setAttr(this.$ball, 'cy', BOARD_HEIGHT / 2)
    setAttr(this.$ball, 'r', 8)
    setAttr(this.$ball, 'fill', COLOR_ACCENT)
  }

  render (el) {
    console.log('render ball')
    el.appendChild(this.$ball)
  }
}
