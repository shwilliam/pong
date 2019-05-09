import {
  setSvgAttr as setAttr,
  makeSvgEl as makeEl
} from '../utils'

import Board from './Board'
import Paddle from './Paddle'

export default class Game {
  constructor (element, width, height) {
    this.$svg = makeEl('svg')
    setAttr(this.$svg, 'width', width)
    setAttr(this.$svg, 'height', height)
    setAttr(this.$svg, 'viewbox', `0 0 ${width} ${height}`)

    this.$container = document.getElementById(element)
    this.$container.appendChild(this.$svg)

    this.board = new Board(width, height)
    this.paddleLeft = new Paddle(10, 92)
    this.paddleRight = new Paddle(494, 92)
  }

  render (el) {
    console.log('render game')
    this.board.render(this.$svg)
    this.paddleLeft.render(this.$svg)
    this.paddleRight.render(this.$svg)
  }
}
