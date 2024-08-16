# Notes

- To extract the result of promise (what promise `resolved`/`rejected`) we need to use promise methods `then`/`catch`

- Promise will never be `filfilled` if we not calling result (with `resolve`)

- Rejected Promise without `catch` block will throw unhandled promise rejection error

- Anything that will be returned from `.then`, `.catch`, `.finally` - will be a promise