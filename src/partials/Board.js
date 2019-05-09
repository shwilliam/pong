import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

export default class Board {
  constructor (width, height) {
    this.$board = makeEl('rect')
    setAttr(this.$board, 'width', width)
    setAttr(this.$board, 'height', height)
    setAttr(this.$board, 'fill', '#353535')

    this.$centerLine = makeEl('line')
    setAttr(this.$centerLine, 'x1', width / 2)
    setAttr(this.$centerLine, 'x2', width / 2)
    setAttr(this.$centerLine, 'y1', 0)
    setAttr(this.$centerLine, 'y2', height)
    setAttr(this.$centerLine, 'stroke', 'white')
    setAttr(this.$centerLine, 'stroke-width', 4)
    setAttr(this.$centerLine, 'stroke-dasharray', '15')
  }

  render (el) {
    console.log('render board')
    el.appendChild(this.$board)
    el.appendChild(this.$centerLine)
  }
}
