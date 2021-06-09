import React from 'react';
import moment from 'moment';

import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BiCheckDouble } from 'react-icons/bi';

import albumStyles from '../styles/AlbumStyles.js';
import generalStyles from '../styles/GeneralStyles.js';

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`/album?id=${this.props.currentAlbum}`)
      .then(response => response.json())
      .then(data => this.setState({albumData: data.MediaContainer, loading: false}));
  }

  handleDownload(song, i) {
    console.log(i);
    fetch('/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song)
    })
      .then(console.log('Yay'))
      .catch(console.log('Nay'));
  }

  render () {
    return (
      <div>
        { this.state.loading ?
          <albumStyles.Container background={`/thumbnails?url=${this.props.albumThumb}`} /> :
          <albumStyles.Container>
            <albumStyles.Background background={`/thumbnails?url=${this.state.albumData.thumb}`}/>
            <generalStyles.PaddedHeading>
              <generalStyles.AlbumThumbnailHolder>
                <generalStyles.AlbumThumbnail>
                  <img src={`/thumbnails?url=${this.state.albumData.thumb}`} width="180" height="180"></img>
                  <generalStyles.AlbumThumbnailText>
                    <img src="/static/play-icon.png" width="100" height="100"></img>
                  </generalStyles.AlbumThumbnailText>
                </generalStyles.AlbumThumbnail>
              </generalStyles.AlbumThumbnailHolder>
              <albumStyles.AlbumTitle>
                {this.state.albumData.title2}
              </albumStyles.AlbumTitle>
            </generalStyles.PaddedHeading>
            <albumStyles.SongsListing>
              {this.state.albumData.Metadata.map((song, i) => {
                return (
                  <albumStyles.SongListing>
                    <albumStyles.SongIndex>
                      {song.index}
                    </albumStyles.SongIndex>
                    <albumStyles.SongInformation>
                      <albumStyles.SongTitle>
                        {song.title}
                      </albumStyles.SongTitle>
                      <albumStyles.SongArtist>
                        {song.originalTitle}
                      </albumStyles.SongArtist>
                    </albumStyles.SongInformation>
                    <albumStyles.SongDuration>
                      {moment(song.duration).format('m:ss')}
                    </albumStyles.SongDuration>
                    <albumStyles.SongDownloadable onClick={() => this.handleDownload(song, i)}>
                      {song.downloaded ?
                        <BiCheckDouble /> :
                        <AiOutlineCloudDownload />
                      }
                    </albumStyles.SongDownloadable>
                  </albumStyles.SongListing>
                );
              })}
            </albumStyles.SongsListing>
          </albumStyles.Container>
        }
      </div>
    );
  }
}

export default AlbumView;