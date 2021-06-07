import React from 'react';
import AlbumStyles from '../styles/AlbumStyles.js';
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
          <AlbumStyles.Container background={`/thumbnails?url=${this.props.albumThumb}`} /> :
          <AlbumStyles.Container>
            <AlbumStyles.Background background={`/thumbnails?url=${this.state.albumData.thumb}`}/>
            <generalStyles.PaddedHeading>
              <generalStyles.AlbumThumbnailHolder>
                <generalStyles.AlbumThumbnail>
                  <img src={`/thumbnails?url=${this.state.albumData.thumb}`} width="180" height="180"></img>
                  <generalStyles.AlbumThumbnailText>
                    <img src="/static/play-icon.png" width="100" height="100"></img>
                  </generalStyles.AlbumThumbnailText>
                </generalStyles.AlbumThumbnail>
              </generalStyles.AlbumThumbnailHolder>
              <h1>
                {this.state.albumData.title2}
              </h1>
            </generalStyles.PaddedHeading>
            <AlbumStyles.SongsListing>
              {this.state.albumData.Metadata.map((song) => {
                return (
                  <div>
                    <div>{song.index}</div>
                    <div>{song.title}</div>
                    <div>{song.originalTitle}</div>
                    <div>{song.duration}</div>
                  </div>
                );
              })}
            </AlbumStyles.SongsListing>
          </AlbumStyles.Container>
        }
      </div>
    );
  }
}

export default AlbumView;