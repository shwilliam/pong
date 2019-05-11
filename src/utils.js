import SETTINGS from './settings'
const { SVG_NS } = SETTINGS

export const setSvgAttr = (el, key, val) => el.setAttributeNS(null, key, val)
export const makeSvgEl = tag => document.createElementNS(SVG_NS, tag)
