import kp from 'keypress'
import {
  titleScreen
} from './const'

import {
  // drawGame,
  drawSignPicker,
  clearTerminal,
  chooseSignX,
  chooseSignO
} from './helpers'

// initialLoad is true when the application starts
// and is false after enter key is pressed
let initialLoad = true

// signPicking is the next step after starting the game
let signPicking

// if both initialLoad and signPicking is false
// game is commencing

// make `process.stdin` begin emitting "keypress" events 
kp(process.stdin)

// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  // global keypress listener
  if (key && (key.name === 'escape' || key.ctrl && key.name == 'c')) {
    console.log('Thank you')
    process.exit(0)
  }
  
  // handle keypresses on start up screen phase
  if (initialLoad) {
    // accept return key only
    if (key && key.name === 'return') {
      initialLoad = false
      signPicking = true
      chooseSignX()
      drawSignPicker()
    }
  // handle keypresses on sign picking phase
  } else if (signPicking) {
    // left and right arrow keys = navigate
    // space = pick
    if (key) {
      switch (key.name) {
        case 'left':
          chooseSignX()
          break
        case 'right':
          chooseSignO()
          break
        case 'space':
          signPicking = false
          // draw the game
          break
        default:
      }
      drawSignPicker()
    }

  // handle keypresses if both phases above is not met
  // or when the game is commencing
  } else {
    console.log('3rd phase keypress', key.name)
  }
})
 
process.stdin.setRawMode(true)
process.stdin.resume()
clearTerminal()
console.log(titleScreen)