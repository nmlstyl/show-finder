import React, { Component } from 'react';

class SavedArtist extends Component {

    likeAction = () => {
      // need user_id and aritst_id
      // upon first like switch is turned true in the backend
      // another hit to the like button will turn the switch to false
    }

    calculateLikes = () => {
      return this.props.likes.filter(like => like.switch === true).length
    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button><br></br><br></br>
          <button className='btn-xs btn-default' onClick={ () => this.likeAction() }>Like</button> &nbsp; { this.calculateLikes() }
        </li>
      )
    }
}

export default SavedArtist
