const express = require('express');
const app = express();
const port = 3004;
const path = require('path');
const plexControllers = require('./plexAPI/plexControllers');

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/albums', plexControllers.getAlbums);

app.listen(port, () => {
  console.log(`MusiPlex listening at http://localhost:${port}`);
});