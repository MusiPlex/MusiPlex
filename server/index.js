const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`MusiPlex listening at http://localhost:${port}`);
});