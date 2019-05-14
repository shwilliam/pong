import './styles/game.css'
import './styles/slider.css'
import './styles/button.css'
import './styles/modal.css'
import Game from './partials/Game'

// create a game instance
const game = new Game('game');

(function gameLoop () {
  game.update()
  requestAnimationFrame(gameLoop)
})()
