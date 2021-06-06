import React from 'react';
import generalStyles from '../styles/GeneralStyles.js';

class AlbumView extends React.Component {
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
            <div>
              {album.title}
            </div>
          );
        })}
      </generalStyles.SixColumnLayout>

    );
  }
}

export default AlbumView;