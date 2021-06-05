const express = require('express');
const app = express();
const port = 3004;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));


app.listen(port, () => {
  console.log(`MusiPlex listening at http://localhost:${port}`);
});