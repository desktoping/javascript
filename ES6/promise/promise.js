const promise = () => new Promise((resolve) => setTimeout(resolve('first'), 1000))

// chained then
promise()
	.then(d => {
		console.log(d)
		return 'second'
	})
	.then(f => {
		console.log(f)
		return 'done'
	})
	.then(g => console.log(g))