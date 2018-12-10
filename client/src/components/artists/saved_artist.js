import React, { Component } from 'react';



class SavedArtist extends Component {

    userId = this.props.cookieAccess.cookies.id

    triggerLike = () => {
      this.props.likeAction( this.props.id, this.userId)
    }

    calculateLikes = () => {
      return this.props.likes.filter(like => like.switch === 'true').length
    }

    buttonColor = () => {
      const thisUsersLike = this.props.likes.filter(like => like.user_id === parseInt(this.userId))
      if (thisUsersLike[0].switch === 'true'){
        return <button className='btn-xs btn-default' id='pinkButton' onClick={ () => this.triggerLike() }>Like</button>
      } else {
        return <button className='btn-xs btn-default' onClick={ () => this.triggerLike() }>Like</button>
      }

    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button><br></br><br></br>
          { this.buttonColor() } &nbsp; { this.calculateLikes() }
        </li>
      )
    }
}

export default SavedArtist
