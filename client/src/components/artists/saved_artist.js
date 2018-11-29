import React, { Component } from 'react';

class SavedArtist extends Component {

    render(){
      return(
        <li id="savedArtist">
          <button className='btn' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button>
        </li>
      )
    }
}

export default SavedArtist
