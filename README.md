# Unhandled Promise Rejection in Node.js Express App

This repository demonstrates a common but easily overlooked error in Node.js applications: unhandled promise rejections. The `bug.js` file contains an Express.js server with an asynchronous operation that may throw an error.  The crucial error is the missing comprehensive error handling within the promise's `.catch` block, leading to crashes or silent failures. The `bugSolution.js` file shows the corrected version with improved error handling.

## Setup

1. Clone the repository.
2. Run `npm install express` to install the required dependency.
3. Run `node bug.js` to execute the buggy code (Observe the result).
4. Run `node bugSolution.js` to execute the fixed code.