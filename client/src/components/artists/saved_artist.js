import React, { Component } from 'react';



class SavedArtist extends Component {

    constructor(props){
      super(props)
      this.coolButton = React.createRef()
    }

    userId = this.props.cookieAccess.cookies.id

    triggerLike = () => {
      this.props.likeAction( this.props.id, this.userId)
    }

    calculateLikes = () => {
      return this.props.likes.filter(like => like.switch === 'true').length
    }

    generateCoolButton = () => {
      let thisUsersLike = this.props.likes.find(like => like.user_id === parseInt(this.userId))

      if (thisUsersLike !== undefined){
        if (thisUsersLike.switch === 'true'){
          return <button className='btn-xs' id='pinkButton' onClick={ () => this.triggerLike() } ref={ this.coolButton }>Cool ?</button>
        } else {
          return <button className='btn-xs' onClick={ () => this.triggerLike() } ref={ this.coolButton }>Cool ?</button>
        }
      } else {
        return <button className='btn-xs' onClick={ () => this.triggerLike() } ref={ this.coolButton }>Cool ?</button>
      }
    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button>
          &nbsp; <button className='btn-xs' onClick={ () => this.props.deleteArtist(this.props.id, this.userId) }>X</button>
          <br></br><br></br>
          { this.generateCoolButton() } &nbsp; { this.calculateLikes() }
        </li>
      )
    }
}

export default SavedArtist
