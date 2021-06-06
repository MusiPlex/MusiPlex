import React from 'react';

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
      <div>
        {this.state.albumData.map((album) => {
          return (
            <div>
              {album.title}
            </div>
          );
        })}
      </div>

    );
  }
}

export default AlbumView;