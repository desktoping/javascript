import chalk from 'chalk'
import { instructionText } from './const'

// place here so the value can be changed without having
// to think about sync
let signs = [{
  value: 'X',
  choosen: false
}, {
  value: 'O',
  choosen: false
}]

export const chooseSignX = () => {
  signs = [{
    value: 'X',
    choosen: true
  }, {
    value: 'O',
    choosen: false
  }]
}

export const chooseSignO = () => {
  signs = [{
    value: 'X',
    choosen: false
  }, {
    value: 'O',
    choosen: true
  }]
}


export const drawGame = (state) => {
  console.log(chalk.black.bgWhite(instructionText))
}

export const clearTerminal = () => console.log('\x1Bc')


export const drawSignPicker = () => {
  clearTerminal()
  console.log(`${chalk.black.bgWhite(instructionText)}\n`)
  const x = signs[0].choosen ?
    chalk.black.bgWhite(`\t\t${signs[0].value}\t\t`) :
    chalk.white(`\t\t${signs[0].value}\t\t`)
  const o = signs[1].choosen ?
    chalk.black.bgWhite(`\t\t${signs[1].value}\t\t`) :
    chalk.white(`\t\t${signs[1].value}\t\t`)

  console.log(x, o)
}