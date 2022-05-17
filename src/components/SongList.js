import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div className='ui column relaxed divided list'>
      <div className='item'>
        <div className='ui right floated'>
          <button className='ui right labeled icon basic button primary'>
            Go here
            <i className='right arrow icon'></i>
          </button>
        </div>
        {/* <i className='large music middle aligned icon'></i> */}
        <div className='content'>
          <a className='header'>Song name</a>
          <div className='description'>Description</div>
        </div>
      </div>
    </div>
  );
};

export default SongList;
