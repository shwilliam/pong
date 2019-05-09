import { PADDLE_WIDTH, PADDLE_HEIGHT, COLOR_ACCENT } from '../settings'
import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Paddle {
  constructor (initialX, initialY) {
    this.$paddle = makeEl('rect')
    setAttr(this.$paddle, 'x', initialX)
    setAttr(this.$paddle, 'y', initialY)
    setAttr(this.$paddle, 'width', PADDLE_WIDTH)
    setAttr(this.$paddle, 'height', PADDLE_HEIGHT)
    setAttr(this.$paddle, 'fill', COLOR_ACCENT)
  }

  render (el) {
    console.log('render paddle')
    el.appendChild(this.$paddle)
  }
}
