// simple calculator with CLI

// argv contains the options/arguments sent along the command to run this script
// eg: npm run mp:calculator 2 1 divide
// in the example
// 2, 1, and divide are argvs
// first argv starts at argv[2]
// add and subtract only :D


const firstNum = parseInt(process.argv[2])
const operation = process.argv[3]
const secondNum = parseInt(process.argv[4])

if (firstNum && secondNum && operation) {
  console.log('Calculating: %d %s %d', firstNum, operation, secondNum)
  console.log('Answer: %d', eval(firstNum + operation + secondNum))
} else {
  console.log('Incomplete arguments. Please specify number, operation, and number')
  console.log('Example: ${commnad} 1 + 1')
  process.exit(0)
}
