const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here, resulting in an unhandled promise rejection
    console.error('Error:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might throw an error
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});