const SETTINGS = {
  // game
  SCORE_LIMIT: 5,

  // comp sim
  COMP_DIFFICULTY: 7,
  COMP_MAX_SPEED: 1,

  // dimensions
  BALL_RADIUS: 8,
  BOARD_GAP: 10,
  BOARD_HEIGHT: 256,
  BOARD_WIDTH: 512,
  PADDLE_WIDTH: 8,
  PADDLE_HEIGHT: 56,

  // movement
  PADDLE_SPEED: 15,

  // colors
  COLOR_BG: '#353535',
  COLOR_ACCENT: 'white',

  // fonts
  FONT_FAMILY: 'Silkscreen Web',
  FONT_SIZE: 30,

  // controls
  KEYS: {
    PAUSE: ' ',
    PLAYER1: {
      UP: 'a',
      DOWN: 'z'
    },
    PLAYER2: {
      UP: 'ArrowUp',
      DOWN: 'ArrowDown'
    }
  },

  // misc
  SVG_NS: 'http://www.w3.org/2000/svg'
};

(() => {
  const urlParams = new URLSearchParams(window.location.search)

  for (let k of urlParams.keys()) {
    // FIXME: fix for non-numeric values
    SETTINGS[k] = parseInt(urlParams.get(k))
  }
})()

export default SETTINGS
