// invalid
// reason:  default is a reserved word
// CODE:

// import { default } from './base'
// console.log(default)

// RESULT:
// unexpected


// valid
// CODE:

import * as lib from './base'
console.log(lib)

// RESULT:
// { default: 1, foo: 'bar' }

/* ----------------------------- */

// valid
// CODE:

// import Val, { foo } from './base'
// console.log(Val, foo)

// RESULT:
// 1 'bar'

/* ----------------------------- */

// valid
// caveat: cannot interchange. eg:import { foo as Value }, Val from './base'
// reason: {},  unexpected token, same with import { foo as Value }, { foo as Value2 } from './base'
// CODE:

// import Val, { foo as Value } from './base'
// console.log(Val, Value)

// RESULT:
// 1 'bar'

/* ------------------------------ */

// valid
// much better to use import Me from './base'
// CODE:

// import { default as Me } from './base'
// console.log(Me)

// RESULT:
// 1

/* ----------------------------- */

// invalid
// CODE:

// import { foo } from './base'
// foo = 'something else'
// console.log(foo)

// RESULT:
// foo is read-only

/* -------------------------- */

// invalid
// CODE:

// import { foo as Val } from './base'
// Val = 'something else'
// console.log(Val)

// RESULT:
// Val is read-only


/* ------------------------------- */

// valid
// CODE:

// import * as val from './base'
// val.foo = 1
// console.log(val)

// RESULT:
// foo = 1

/* ------------------------------- */

// invalid
// CODE:

// import { foo4 } from './base'
// foo4 = 'something else'
// console.log(foo4)

// RESULT:
// foo4 is read-only

/* ---------------------------------- */

// valid
// CODE:

// import * as lib from './base'
// lib.changeFoo4('something else')
// console.log(lib.foo4)

// RESULT:
// something else

/* ------------------------------------------- */

// invalid
// CODE:

// import * as lib from './base'
// lib.changeFoo('something else')
// console.log(lib.foo)

// RESULT:
// foo is read-only
