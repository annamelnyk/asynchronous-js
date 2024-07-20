// Question 1
// The below code errors when you run it.
// Make it run without errors but you cannot change the location of the `let` statement, that has to stay at the end.

// Explanation: Callbacks are not async by default, this was a sync call so the message
// variable was not defined by the time the callback was called.
function doAsyncTask(cb) {
  setTimeout(cb, 0)
}

doAsyncTask(_ => console.log(message));

let message = "Callback Called";

// # Question 2

// The below code swallows the error and doesn't pass it up the chain, make it pass the error up the stack using the next callback.

// ```js
// const fs = require("fs");

// function readFileThenDo(next) {
//   fs.readFile("./blah.nofile", (err, data) => {
//     next(data);
//   });
// }

// readFileThenDo(data => {
//   console.log(data);
// });
// ```

// # Question 3

// Instead of passing it up the stack throw it instead and try to catch it later on.

// ```js
// const fs = require("fs");

// function readFileThenDo(next) {
//   fs.readFile("./blah.nofile", (err, data) => {
//     if (err) throw err;
//     next(data);
//   });
// }
// // Hint use try..catch
// readFileThenDo(data => {
//   console.log(data);
// });
// ```
