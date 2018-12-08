import React, { Component } from 'react';

class SavedArtist extends Component {

    triggerLike = () => {
      this.props.likeAction( this.props.id, this.props.cookieAccess.cookies.id)
    }

    calculateLikes = () => {
      return this.props.likes.filter(like => like.switch === 'true').length
    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button><br></br><br></br>
          <button className='btn-xs btn-default' onClick={ () => this.triggerLike() }>Like</button> &nbsp; { this.calculateLikes() }
        </li>
      )
    }
}

export default SavedArtist
