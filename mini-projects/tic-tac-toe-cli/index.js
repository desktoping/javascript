import {
  startPrompt,
  startGame,
  createBoard
} from './helpers'

let playerOneSign // player
let playerTwoSign // bot

// init
startPrompt()
createBoard()
startGame()

// const askMove = () => {
//   prompt.get([promptMessage], (err, res) => {
//     if (err) process.exit(0)
//     if (res[promptMessage] < 1 || res[promptMessage] > 9) {
//       console.log('Invalid move, enter from 1 to 9')
//       return askMove()
//     } else {
//       // console.log('Your move: ' + res[promptMessage])
//       const isValid = board.handleMove(res[promptMessage], 'O')
//       if (isValid) {
//         checkWinner('[O]')
//         console.log('Opponents turn...')
//         board.handleAiMove()
//         checkWinner('[X]')
//       }
//       askMove()
//     }
//   })
// }


// const startGame = () => {
//   board.displayBoard()
//   askMove()
// }

// const selectSign = (cb) => {
//   askUser(prompt, signSelectMessage, (err, res) => {
//     if (err) process.exit(0)
//     if (res[signSelectMessage] > 2 || res[signSelectMessage] < 1) {
//       cb('Invalid selection, please choose from 1 or 2')
//     } else {
//       cb(null, signs[parseInt(res[signSelectMessage]) - 1])
//     }
//   })
// }


// const signCb = (fail, success) => {
//   if (fail) {
//     console.log(fail)
//     selectSign(signCb)
//   } else {
//     startGame()
//   }
// }
// selectSign(signCb)


process.on('SIGINIT', () => process.exit(0))
