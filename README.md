# pong

> Vanilla JS pong game

## Controls

| Key(s)       | Description  |
| --------     | -----------  |
| `a`/`z`      | P1 UP/DOWN   |
| `UP`/`DOWN`  | P2 UP/DOWN   |
| `SPACE`      | Pause        |

## Features

The 'settings' button opens a modal with inputs that allows users to customize game parameters and open the new game with modified settings as URL string parameters. This means that the customized game can be shared and played using the active URL. These settings include toggling a single player mode with variable difficulty, adjusting paddle size, speed, and ball size.

Paddle movement control is handled by the KeyListener class, which listens to all `keydown` & `keyup` events on the document and adds/removes the keys to an array of currently pressed keys. This allows for both players to move their paddles simultaneously.

## Setup

Install npm dependencies by running `npm i`. After that finishes you can run `npm start` to start a Parcel dev server at http://localhost:3000.
