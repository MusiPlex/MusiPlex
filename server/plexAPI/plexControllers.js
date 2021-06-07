const getAlbums = require('./controllers/getAlbums');
const getThumbnails = require('./controllers/getThumbnails');

const plexControllers = {
  getAlbums,
  getThumbnails
};

module.exports = plexControllers;