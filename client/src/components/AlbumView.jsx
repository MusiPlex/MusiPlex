import React from 'react';
import AlbumStyles from '../styles/AlbumStyles.js';

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: [],
      loading: true,
    };
    console.log(props);
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
              <img src={`/thumbnails?url=${this.state.albumData.thumb}`} width="180" height="180"></img>
              <h1>
                {this.state.albumData.title2}
              </h1>
          </AlbumStyles.Container>
        }
      </div>
    );
  }
}

export default AlbumView;