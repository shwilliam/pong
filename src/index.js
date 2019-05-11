import './styles/game.css'
import Game from './partials/Game'

// create a game instance
const game = new Game('game');

(function gameLoop () {
  game.update()
  requestAnimationFrame(gameLoop)
})()
