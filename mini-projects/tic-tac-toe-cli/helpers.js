import prompt from 'prompt'
import Board from './board'

import {
  promptMessage,
  signSelectMessage,
  signs
} from './const'

export const createBoard = () => new Board()
export const startPrompt = () => prompt.start()
export const checkWinner = (sign) => {
  const winner = board.checkWinner(sign)
  if (winner) {
    console.log(`${winner} won!`)
    process.exit(0)
  }
}

export const askPlayer = (message, responseHandler) => {
  prompt.get([message], responseHandler)
}

export const startGame = () => {
  console.log(`
    Sign selection:
    1: O
    2: X
  `)

  askPlayer(signSelectMessage, function cb (err, res) {
    if (err) process.exit(0)
    if (res[signSelectMessage] > 2 || res[signSelectMessage] < 1) {
      console.log('Invalid selection. Please choose between 1 or 2')
      askPlayer(signSelectMessage, cb)
    } else {
      console.log('selected')
    }
  })
}