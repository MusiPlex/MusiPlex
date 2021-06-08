const getAlbums = require('./controllers/getAlbums');
const getAlbum = require('./controllers/getAlbum');
const getThumbnails = require('./controllers/getThumbnails');
const downloadSong = require('./controllers/downloadSong');

const plexControllers = {
  getAlbums,
  getAlbum,
  getThumbnails,
  downloadSong
};

module.exports = plexControllers;