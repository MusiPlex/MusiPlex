const plexConfig = require('../plexConfig');
const axios = require('axios');

const getAlbums = (req, res) => {
  const url = `${plexConfig.baseURL}:${plexConfig.port}/library/sections/8/all`;
  const params = {
    'sort': 'titleSort',
    'type': 9,
    'X-Plex-Token': plexConfig.plexToken,
    'X-Plex-Container-Start': 0,
    'X-Plex-Container-Size': 24
  };
  axios.get(url, { params })
    .then ((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = getAlbums;