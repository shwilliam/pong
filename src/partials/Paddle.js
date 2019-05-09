import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Paddle {
  constructor (x, y) {
    this.$paddle = makeEl('rect')
    setAttr(this.$paddle, 'x', x)
    setAttr(this.$paddle, 'y', y)
    setAttr(this.$paddle, 'width', 8)
    setAttr(this.$paddle, 'height', 56)
    setAttr(this.$paddle, 'fill', 'white')
  }

  render (el) {
    console.log('render paddle')
    el.appendChild(this.$paddle)
  }
}
