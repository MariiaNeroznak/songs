import React from 'react';
// import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

function App() {
  return (
    <div className='ui container segment'>
      <div className='ui two column very relaxed grid'>
        <SongList />
        <SongDetail />
      </div>
      <div className='ui vertical divider'>
        <i className='arrow right circle large icon'></i>
      </div>
    </div>
  );
}

export default App;
