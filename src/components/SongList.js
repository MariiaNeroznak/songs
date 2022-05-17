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
              onClick={() => this.props.selectSong}
            >
              Select
              <i className='right arrow icon'></i>
            </button>
          </div>
          <div className='bottom aligned content'>
            {/* <i className='large music middle aligned icon'></i> */}
            <p className='header'>{song.title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='ui column relaxed divided list small'>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
