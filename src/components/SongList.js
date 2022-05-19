import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='ui right floated'>
            <button
              className='ui right labeled icon basic button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
              <i className='right arrow icon'></i>
            </button>
          </div>
          <div className='bottom aligned content'>
            <p className='header'>{song.title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
