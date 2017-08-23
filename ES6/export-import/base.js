// sample file to import

// invalid
// REASON: foo is not defined, compile error
// export default foo = 'bar'

// REASON: foo is read-only, access error
// export const changeFoo = (str) => foo = str

// REASON: unexpected token, compile error
// export { foo5: 'bar' }

// REASON: unexpected token, compile error
// const bb = 'bb'
// export bb



// valid
// default
export default 1
// export default () => 'valid'

// const aa = 'bar'
// export default [ aa ]
// export default { aa }
// export default aa

// variables
const foo6 = 'bar'
export const foo = 'bar'
export let foo4 = 'bar'
export { foo6 }

// functions
export function foo2() { return 'bar' }
export const foo3 = () => 'bar'
export const changeFoo4 = (str) => foo4 = str

