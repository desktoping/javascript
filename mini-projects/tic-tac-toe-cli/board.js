// export default class Board {
//   constructor() {
//     this.state = [
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]',
//       '[ ]'
//     ]
//   }

//   handleMove(index, sign, ai) {
//     const canMove = this._checkIfNotFull()
//     if (canMove) {
//       index = index - 1
//       if (!this._searchIndex(index)) {
//         if (!ai) {
//           console.log('Index is non empty')
//           this.displayBoard()
//         }
//         return false
//       } else {
//         this.state[index] = `[${sign}]`
//         this.displayBoard()
//         return true
//       }
//     }
//   }

//   handleAiMove() {
//     const canMove = this._checkIfNotFull()
//     if (canMove) {
//       const aiIndex = () => Math.round(Math.random() * (8 /* 9 - 1 */) + 1)
//       let isValid
//       do {
//         const index = aiIndex()
//         isValid = this.handleMove(aiIndex(), 'X', true)
//       } while (isValid === false)
//     }
//   }

//   checkWinner(sign) {
//     const winningCombination = ['012', '345', '678', '036', '147', '258', '048', '246']
//     const combo = this.state.reduce((res, el, i) => {
//       if (el === sign) res = res.concat(i)
//       return res
//     }, '')

//     const isWinningCombination = (str, str2) => {
//       const arrStr = str.split('')
//       const arrStr2 = str2.split('')

//       return arrStr2.filter(function(each) {
//         return arrStr.indexOf(each) === -1;
//       }).length === 0;
//     }

//     const winner = winningCombination.some((e) => isWinningCombination(combo, e))
//     if (winner) return sign
//     return false
//   }

//   displayBoard() {
//     console.log(`







//     `)
//     let ctr = ''
//     for(let i = 0; i < this.state.length; i++) {
//       ctr = ctr.concat(this.state[i])
//       if (i % 3 === 2) {
//         console.log('\t\t', ctr, '\n')
//         ctr = ''
//       }
//     }
//     console.log(`







//     `)
//   }

//   _searchIndex(index) {
//     return this.state[index] === '[ ]'
//   }

//   _checkIfNotFull() {
//     return this.state.some((e) => e === '[ ]')
//   }
// }


// drawing the board


