const express = require('express');
const app = express();
const port = 3004;
const path = require('path');
const plexControllers = require('./plexAPI/plexControllers');

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/static', express.static(path.join(__dirname, '..', 'static')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/albums', plexControllers.getAlbums);
app.get('/album', plexControllers.getAlbum);
app.get('/thumbnails', plexControllers.getThumbnails);
app.post('/download', plexControllers.downloadSong);

app.listen(port, () => {
  console.log(`MusiPlex listening at http://localhost:${port}`);
});