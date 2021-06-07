const axios = require('axios');
const fs = require('fs');
const path = require('path');
const plexConfig = require('../plexConfig');

const getThumbnails = async (req, res) => {
  let outName =` ${req.query.url.split('/').slice(-1)}.jpg`
  let outPath = path.join(__dirname, '..', '..', '..', 'assets', outName)
  if (fs.existsSync(outPath)) {
    res.sendFile(outPath);
  } else {
    const url = `${plexConfig.baseURL}:${plexConfig.port}/photo/:/transcode`;
    const params = {
      'width': '240',
      'height': '240',
      'minSize': '1',
      'upscale': '1',
      'url': req.query.url,
      'X-Plex-Token': plexConfig.plexToken,
    };
    try {
      const response = await axios({
        method: 'GET',
        url: url,
        params: params,
        responseType: 'stream',
      });
      const w = response.data.pipe(fs.createWriteStream(outPath));
      w.on('finish', () => {
        res.sendFile(outPath);
      });
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = getThumbnails;