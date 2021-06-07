const getAlbums = require('./controllers/getAlbums');
const getAlbum = require('./controllers/getAlbum');
const getThumbnails = require('./controllers/getThumbnails');

const plexControllers = {
  getAlbums,
  getAlbum,
  getThumbnails
};

module.exports = plexControllers;