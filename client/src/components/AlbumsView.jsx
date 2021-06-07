import React from 'react';
import generalStyles from '../styles/GeneralStyles.js';

class AlbumsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: []
    };
  }

  componentDidMount() {
    fetch('/albums')
      .then(response => response.json())
      .then(data => this.setState({albumData: data.MediaContainer.Metadata}));
  }

  render () {
    return (
      <generalStyles.SixColumnLayout>
        {this.state.albumData.map((album) => {
          return (
            <generalStyles.AlbumView onClick={() => this.props.handleAlbum(album.ratingKey, album.thumb)}>
              <generalStyles.AlbumThumbnailHolder>
                <generalStyles.AlbumThumbnail>
                  <img src={`/thumbnails?url=${album.thumb}`} width="180" height="180"></img>
                  <generalStyles.AlbumThumbnailText>
                    <img src="/static/play-icon.png" width="100" height="100"></img>
                  </generalStyles.AlbumThumbnailText>
                </generalStyles.AlbumThumbnail>
              </generalStyles.AlbumThumbnailHolder>
              <generalStyles.AlbumTitle>
                {album.title}
              </generalStyles.AlbumTitle>
            </generalStyles.AlbumView>
          );
        })}
      </generalStyles.SixColumnLayout>

    );
  }
}

export default AlbumsView;