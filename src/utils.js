import { SVG_NS } from './settings'

export const setSvgAttr = (el, key, val) => el.setAttributeNS(null, key, val)
export const makeSvgEl = tag => document.createElementNS(SVG_NS, tag)
