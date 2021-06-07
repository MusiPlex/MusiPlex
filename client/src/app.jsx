import React from 'react';
import AlbumView from './components/AlbumView.jsx';
import globalStyles from './styles/GlobalStyles.js';

const App = () => {
  return (
    <globalStyles.body>
      <AlbumView />
    </globalStyles.body>
  );
};

export default App;