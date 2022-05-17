import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <div className='ui container'>
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
