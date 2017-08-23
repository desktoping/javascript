// const and let are block-scoped, see example below
// function callMe() {
//   const a = 'scoped'
// }

// const a = 'me'
// callMe()
// console.log(a)

/* ----------------------------------------- */

// pretty basic
// difference
// const -> read only
// let -> writable

const foo = 'bar'
const foo1 = { bar: 'bar'}
let foo2 = 'bar'
let foo3 = { bar: 'bar'}

// invalid
// REASON: unexpected token
// const { bar: 'bar' }
