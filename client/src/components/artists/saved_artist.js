import React, { Component } from 'react';

class SavedArtist extends Component {

    state = {
      likes: 0
    }

    addLike = () => {
      if (this.state.likes === 1){
        this.setState({
          likes: this.state.likes - 1
        })
        // add like to artist
      } else {
        this.setState({
          likes: this.state.likes + 1
        })
        // take like away from artist
      }
    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button><br></br><br></br>
          <button className='btn-xs btn-default' onClick={ () => this.addLike() }>Like</button> &nbsp; { this.state.likes }
        </li>
      )
    }
}

export default SavedArtist
