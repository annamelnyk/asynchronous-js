// Question 1
// The below code errors when you run it.
// Make it run without errors but you cannot change the location of the `let` statement, that has to stay at the end.

// Explanation: Callbacks are not async by default, this was a sync call so the message
// variable was not defined by the time the callback was called.
function doAsyncTask(cb) {
  setTimeout(cb)

  // or
  //process.nextTick(cb)
}

doAsyncTask(_ => console.log(message));

let message = "Callback Called";

// # Question 2
// The below code swallows the error and doesn't pass it up the chain,
// make it pass the error up the stack using the next callback.

const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah1.nofile", (err, data) => {
    if (err) {
      next(err)
    } else {
      next(data);
    }
  });
}

readFileThenDo(data => {
  console.log(data);
});

// # Question 3
// Instead of passing it up the stack throw it instead and try to catch it later on.

// Explanation: Or if the error is serious, you can throw the error as soon as you see it.
// try..catch desn't work as you expect with callbacks, it only really works with synchronous code.
// By the time the callback throws the error we have moved on from the try..catch,
// the throw happens in the root scope and will just cause the program to exit.

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    next(err, data);
  });
}

// Hint use try..catch
readFileThenDo((err, data) => {
  try {
    if (err) throw err
    console.log('trying');
    console.log(data);
  } catch (err) {
    console.log('catching');
    console.error(err)
  }
});
