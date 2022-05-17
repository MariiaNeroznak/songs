import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <div className='ui container segment'>
      <div className='ui two column very relaxed grid'>
        <SongList songsList={[]} />
        <SongDetail />
      </div>
      <div class='ui vertical divider'>
        <i className='arrow right circle large icon'></i>
      </div>
    </div>
  );
}

export default App;
