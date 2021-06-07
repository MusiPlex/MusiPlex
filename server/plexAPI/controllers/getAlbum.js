const plexConfig = require('../plexConfig');
const axios = require('axios');

const getAlbum = (req, res) => {
  const url = `${plexConfig.baseURL}:${plexConfig.port}/library/metadata/${req.query.id}/children`;
  const params = {
    'excludeAllLeaves': 1,
    'X-Plex-Token': plexConfig.plexToken,
  };
  axios.get(url, { params })
    .then ((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = getAlbum;