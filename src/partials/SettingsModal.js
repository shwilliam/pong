import SETTINGS from '../settings'
const { FONT_FAMILY } = SETTINGS

export default class SettingsModal {
  constructor (btnEl, pause) {
    this.isOpen = false

    const $toggle = document.getElementById(btnEl)
    $toggle.style.fontFamily = 'inherit'
    $toggle.addEventListener('click', () => {
      this.toggle()
      pause(true)
    })

    this.$modal = document.createElement('div')
    this.$modal.style.position = 'fixed'
    this.$modal.style.top = 0
    this.$modal.style.right = 0
    this.$modal.style.bottom = 0
    this.$modal.style.left = 0
    this.$modal.style.display = 'flex'
    this.$modal.style.justifyContent = 'center'
    this.$modal.style.alignItems = 'center'
    this.$modal.style.backgroundColor = 'rgba(0,0,0,0.4)'

    const $modalContent = document.createElement('div')
    $modalContent.style.fontFamily = FONT_FAMILY
    $modalContent.style.position = 'relative'
    $modalContent.style.padding = '30px'
    $modalContent.style.lineHeight = '3rem'
    $modalContent.style.height = '200px'
    $modalContent.style.backgroundColor = 'white'

    const $modalCloseBtn = document.createElement('button')
    $modalCloseBtn.innerText = 'cancel'
    $modalCloseBtn.style.fontFamily = 'inherit'
    $modalCloseBtn.addEventListener(
      'click',
      this.toggle.bind(this)
    )

    const $resetBtn = document.createElement('button')
    $resetBtn.innerText = 'reset'
    $resetBtn.style.fontFamily = 'inherit'
    $resetBtn.addEventListener(
      'click',
      () => { window.location = window.location.href.split('?')[0] }
    )

    const $paddleSpeedLabel = document.createElement('label')
    $paddleSpeedLabel.setAttribute('for', 'paddle-speed')
    $paddleSpeedLabel.innerText = 'paddle speed: '
    $paddleSpeedLabel.style.display = 'block'
    const $paddleSpeedInput = document.createElement('input')
    $paddleSpeedInput.setAttribute('id', 'paddle-speed')
    $paddleSpeedInput.setAttribute('name', 'paddle-speed')
    $paddleSpeedInput.setAttribute('type', 'range')
    $paddleSpeedInput.setAttribute('min', 2)
    $paddleSpeedInput.setAttribute('value', 10)
    $paddleSpeedInput.setAttribute('max', 45)
    $paddleSpeedLabel.appendChild($paddleSpeedInput)

    const $ballRadiusLabel = document.createElement('label')
    $ballRadiusLabel.setAttribute('for', 'ball-radius')
    $ballRadiusLabel.innerText = 'ball radius: '
    $ballRadiusLabel.style.display = 'block'
    const $ballRadiusInput = document.createElement('input')
    $ballRadiusInput.setAttribute('id', 'ball-radius')
    $ballRadiusInput.setAttribute('name', 'ball-radius')
    $ballRadiusInput.setAttribute('type', 'range')
    $ballRadiusInput.setAttribute('min', 1)
    $ballRadiusInput.setAttribute('value', 8)
    $ballRadiusInput.setAttribute('max', 40)
    $ballRadiusLabel.appendChild($ballRadiusInput)

    const $paddleHeightLabel = document.createElement('label')
    $paddleHeightLabel.setAttribute('for', 'paddle-height')
    $paddleHeightLabel.innerText = 'paddle height: '
    $paddleHeightLabel.style.display = 'block'
    const $paddleHeightInput = document.createElement('input')
    $paddleHeightInput.setAttribute('id', 'paddle-height')
    $paddleHeightInput.setAttribute('name', 'paddle-height')
    $paddleHeightInput.setAttribute('type', 'range')
    $paddleHeightInput.setAttribute('min', 5)
    $paddleHeightInput.setAttribute('value', 56)
    $paddleHeightInput.setAttribute('max', 150)
    $paddleHeightLabel.appendChild($paddleHeightInput)

    const $createGameBtn = document.createElement('button')
    $createGameBtn.innerText = 'create game'
    $createGameBtn.style.fontFamily = 'inherit'
    $createGameBtn.addEventListener(
      'click',
      () => {
        window.location = `${window.location.href.split('?')[0]}?PADDLE_SPEED=${$paddleSpeedInput.value}&BALL_RADIUS=${$ballRadiusInput.value}&PADDLE_HEIGHT=${$paddleHeightInput.value}`
      }
    )

    $modalContent.appendChild($paddleSpeedLabel)
    $modalContent.appendChild($ballRadiusLabel)
    $modalContent.appendChild($paddleHeightLabel)
    $modalContent.appendChild($modalCloseBtn)
    $modalContent.appendChild($resetBtn)
    $modalContent.appendChild($createGameBtn)
    this.$modal.appendChild($modalContent)
  }

  toggle () {
    if (this.isOpen) this.close()
    else this.open()
  }

  open () {
    document.documentElement.appendChild(this.$modal)
    this.isOpen = true
  }

  close () {
    document.documentElement.removeChild(this.$modal)
    this.isOpen = false
  }
}
