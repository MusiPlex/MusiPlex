import React from 'react';
import AlbumsView from './components/AlbumsView.jsx';
import globalStyles from './styles/GlobalStyles.js';

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <globalStyles.body>
        <AlbumsView />
      </globalStyles.body>
    );
  }
}

export default App;