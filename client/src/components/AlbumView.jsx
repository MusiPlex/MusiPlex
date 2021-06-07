import React from 'react';
import styled from 'styled-components';

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
          <div></div> :
          <div>
            <div style={{ backgroundImage: `url(/thumbnails?url=${this.state.albumData.thumb}), height: '500px', width: '1000px'`}}>
            <img src={`/thumbnails?url=${this.state.albumData.thumb}`} width="180" height="180"></img>
            <h1>
              {this.state.albumData.title2}
            </h1>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default AlbumView;