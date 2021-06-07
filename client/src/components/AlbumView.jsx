import React from 'react';
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
              {this.state.albumData.Metadata.map((song) => {
                return (
                  <albumStyles.SongListing>
                    <albumStyles.SongIndex>
                      {song.index}
                    </albumStyles.SongIndex>
                    <albumStyles.SongInformation>
                      <div>{song.title}</div>
                      <div>{song.originalTitle}</div>
                    </albumStyles.SongInformation>
                    <albumStyles.SongDuration>
                      {song.duration}
                    </albumStyles.SongDuration>
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