// Question 1 - (10min)

//Create a promise version of the async readFile function

const fs = require("fs")

// JS way
function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err)
      resolve(data)
    // in promise will work only one hadler `resolve` or `reject` => dont need `if ... else` statement
    })
  })
}

readFile("./files/demofile.txt", "utf-8")
  .then(
    (data) => console.log("File read JS", data),
    (err) => console.error("Oops Js", err.message)
    // `then` can take two arguments, the second argument is a _error_ handler
    // that gets called if the promise is `rejected`
  )

// NodeJS way
const util = require("util");
const readFileNode = util.promisify(fs.readFile)

readFileNode("./files/demofile.txt", "utf-8")
  .then(
    (data) => console.log("File read Node", data),
    (err) => console.error("Oops Node", err.message)
  )


  // Question 2
  //Load a file from disk using readFile and then compress it using the async zlib node library,
  // use a promise chain to process this work.

  const fs = require("fs");
  const zlib = require("zlib");

