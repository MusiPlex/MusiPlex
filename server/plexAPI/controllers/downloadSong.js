const axios = require('axios');
const fs = require('fs');
const path = require('path');
const plexConfig = require('../plexConfig');

const downloadSong = async (req, res) => {
  let outName = req.body.Media[0].id.toString()
  let outPath = path.join(__dirname, '..', '..', '..', 'assets', 'songs', outName)
  if (fs.existsSync(outPath)) {
    res.status(200)
    res.send({status: 'Downloaded'})
  } else {
    const url = `${plexConfig.baseURL}:${plexConfig.port}${req.body.Media[0].Part[0].key}`;
    const params = {
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
        res.status(200)
        res.send({status: 'Downloaded'})
      });
    } catch (err) {
      res.status(404);
      res.send({status: 'Error'})
      console.log(err)
    }
  }
};

module.exports = downloadSong;