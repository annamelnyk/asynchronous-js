// Resolve
const myPromiseToResolve = new Promise((resolve, reject) => {
  setTimeout((res = 'Hello my friend') => {
    console.log(res)
    console.log('Waiting for ice cream')
    resolve('Here is your ice cream!')
  }, 2000)
})

console.log('Hello?')
console.log(myPromiseToResolve)

myPromiseToResolve.then(resolvedValue => {
  console.log(resolvedValue)
})


// Reject
const myPromiseToReject = new Promise((resolve, reject) => {
  setTimeout((res = 'Hello my friend') => {
    console.log(res)
    console.log('Waiting for ice cream')
    reject('Sorry we are out of ice cream!')
  }, 2000)
})

console.log('Hello?')
console.log(myPromiseToReject)

myPromiseToReject.then(resolvedValue => {
  console.log(resolvedValue)
}).catch(rejectedErr => {
  console.log(rejectedErr)
})

// -- Start Example
// Wiill not work if separate blocks for `then` and `catch`
// It need to be chaining
myPromiseToReject.then(resolvedValue => {
  console.log(resolvedValue)
})

myPromiseToReject.catch(rejectedErr => {
  console.log(rejectedErr)
})
// -- End Example

