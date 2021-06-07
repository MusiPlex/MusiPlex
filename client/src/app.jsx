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

  handleAlbum (albumId) {
    this.setState({currentAlbum: albumId, currentView: 'album'});
  }

  render () {
    return (
      <globalStyles.body>
        {this.state.currentView === 'albums' ?
          <AlbumsView handleAlbum={this.handleAlbum.bind(this)} /> :
          <AlbumView currentAlbum={this.state.currentAlbum}/>
        }
      </globalStyles.body>
    );
  }
}

export default App;