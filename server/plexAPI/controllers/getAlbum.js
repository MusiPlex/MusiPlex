const plexConfig = require('../plexConfig');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getAlbum = (req, res) => {
  const url = `${plexConfig.baseURL}:${plexConfig.port}/library/metadata/${req.query.id}/children`;
  let outPath = path.join(__dirname, '..', '..', '..', 'assets', 'songs')
  const params = {
    'excludeAllLeaves': 1,
    'X-Plex-Token': plexConfig.plexToken,
  };
  axios.get(url, { params })
    .then ((response) => {
      let albumData = response.data;
      for (let i = 0; i < albumData.MediaContainer.Metadata.length; i++) {
        if (fs.existsSync(path.join(outPath,albumData.MediaContainer.Metadata[i].ratingKey))) {
          albumData.MediaContainer.Metadata[i].downloaded = true;
        } else {
          albumData.MediaContainer.Metadata[i].downloaded = false;
        }
      }
      res.send(albumData);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = getAlbum;