import React, { Component } from 'react';
import SavedArtist from './saved_artist'

class SavedArtists extends Component {

    state = {
      sort: false
    }

    sortArtists = () => {
      if (this.state.sort === false){
        this.setState({
          sort: true
        })
      } else {
        this.setState({
          sort: false
        })
      }
    }

    displayArtists = () => {
      if (this.state.sort === false){
      return this.props.savedArtists
      .sort(function(a, b){
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            })
      .map((artist, idx) => <SavedArtist name={ artist.name }
                                          fetchByArtist={ this.props.fetchByArtist }
                                          key={ idx }
                                          likeAction={ this.props.likeAction }
                                          deleteArtist= { this.props.deleteArtist }
                                          likes={ artist.likes }
                                          cookieAccess={ this.props.cookieAccess }
                                          id={ artist.id }/>)
      } else {
        return this.props.savedArtists
        .sort(function(a, b){
                  if(a.name > b.name) return -1;
                  if(a.name < b.name) return 1;
                  return 0;
              })
        .map((artist, idx) => <SavedArtist name={ artist.name }
                                            fetchByArtist={ this.props.fetchByArtist }
                                            key={ idx }
                                            likeAction={ this.props.likeAction }
                                            likes={ artist.likes }
                                            cookieAccess={ this.props.cookieAccess }
                                            id={ artist.id }/>)
              }  // end else
    }  // end displayArtists

    render(){
      return(
        <div className="col-lg-12" id="savedartists">
          <button className="btn btn-default" onClick={ () => this.sortArtists() }>Sort Alphabetically</button><br></br><br></br>
          <ul id="savedArtists">
            { this.displayArtists() }
          </ul>
        </div>
      )
    }
}

export default SavedArtists
