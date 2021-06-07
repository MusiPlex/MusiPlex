import React from 'react';
import AlbumsView from './components/AlbumsView.jsx';
import AlbumView from './components/AlbumView.jsx';
import globalStyles from './styles/GlobalStyles.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentView: 'albums'
    };
  }

  handleAlbum (albumId, albumThumb) {
    this.setState({currentAlbum: albumId, albumThumb: albumThumb, currentView: 'album'});
  }

  render () {
    return (
      <globalStyles.body>
        {this.state.currentView === 'albums' ?
          <AlbumsView handleAlbum={this.handleAlbum.bind(this)} /> :
          <AlbumView currentAlbum={this.state.currentAlbum} albumThumb={this.state.albumThumb}/>
        }
      </globalStyles.body>
    );
  }
}

export default App;