import SETTINGS from '../settings'
const { FONT_FAMILY } = SETTINGS

export default class SettingsModal {
  constructor (btnEl, pause) {
    this.isOpen = false

    const $toggle = document.getElementById(btnEl)
    $toggle.addEventListener('click', () => {
      this.toggle()
      pause(this.isOpen)
    })

    this.$modal = document.createElement('div')
    this.$modal.classList.add('modal')

    const $modalContent = document.createElement('div')
    $modalContent.classList.add('modal__content')
    $modalContent.style.fontFamily = FONT_FAMILY

    const $modalCloseBtn = document.createElement('button')
    $modalCloseBtn.innerText = 'cancel'
    $modalCloseBtn.addEventListener(
      'click',
      () => {
        this.toggle()
        pause(false)
      }
    )

    const $resetBtn = document.createElement('button')
    $resetBtn.innerText = 'reset'
    $resetBtn.addEventListener(
      'click',
      () => { window.location = window.location.href.split('?')[0] }
    )

    const $paddleSpeedLabel = document.createElement('label')
    $paddleSpeedLabel.setAttribute('for', 'paddle-speed')
    $paddleSpeedLabel.innerText = 'paddle speed: '
    $paddleSpeedLabel.classList.add('modal__label')
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
    $ballRadiusLabel.classList.add('modal__label')
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
    $paddleHeightLabel.classList.add('modal__label')
    const $paddleHeightInput = document.createElement('input')
    $paddleHeightInput.setAttribute('id', 'paddle-height')
    $paddleHeightInput.setAttribute('name', 'paddle-height')
    $paddleHeightInput.setAttribute('type', 'range')
    $paddleHeightInput.setAttribute('min', 5)
    $paddleHeightInput.setAttribute('value', 56)
    $paddleHeightInput.setAttribute('max', 150)
    $paddleHeightLabel.appendChild($paddleHeightInput)

    const $onePlayerToggleLabel = document.createElement('label')
    $onePlayerToggleLabel.setAttribute('for', 'one-player')
    $onePlayerToggleLabel.innerText = 'single player: '
    $onePlayerToggleLabel.classList.add('modal__label')
    const $onePlayerToggleInput = document.createElement('input')
    $onePlayerToggleInput.setAttribute('id', 'one-player')
    $onePlayerToggleInput.setAttribute('name', 'one-player')
    $onePlayerToggleInput.setAttribute('type', 'checkbox')
    $onePlayerToggleInput.setAttribute('value', false)
    $onePlayerToggleInput.classList.add('modal__checkbox')
    $onePlayerToggleLabel.appendChild($onePlayerToggleInput)

    const $compDifficultyLabel = document.createElement('label')
    $compDifficultyLabel.setAttribute('for', 'comp-difficulty')
    $compDifficultyLabel.innerText = 'computer difficulty: '
    $compDifficultyLabel.classList.add('modal__label')
    const $compDifficultyInput = document.createElement('input')
    $compDifficultyInput.setAttribute('id', 'comp-difficulty')
    $compDifficultyInput.setAttribute('name', 'comp-difficulty')
    $compDifficultyInput.setAttribute('type', 'range')
    $compDifficultyInput.setAttribute('min', 5)
    $compDifficultyInput.setAttribute('value', 7)
    $compDifficultyInput.setAttribute('max', 10)
    $compDifficultyLabel.appendChild($compDifficultyInput)

    const $createGameBtn = document.createElement('button')
    $createGameBtn.innerText = 'create game'
    $createGameBtn.addEventListener(
      'click',
      () => {
        window.location = `${window.location.href.split('?')[0]}?PADDLE_SPEED=${$paddleSpeedInput.value}&BALL_RADIUS=${$ballRadiusInput.value}&PADDLE_HEIGHT=${$paddleHeightInput.value}&SINGLE_PLAYER=${$onePlayerToggleInput.checked ? 1 : 0}&COMP_DIFFICULTY=${$compDifficultyInput.value}`
      }
    )

    $modalContent.appendChild($paddleSpeedLabel)
    $modalContent.appendChild($ballRadiusLabel)
    $modalContent.appendChild($paddleHeightLabel)
    $modalContent.appendChild($onePlayerToggleLabel)
    $modalContent.appendChild($compDifficultyLabel)
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
