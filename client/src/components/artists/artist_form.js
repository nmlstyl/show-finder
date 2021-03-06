import React, { Component } from 'react';

class ArtistForm extends Component {

  state = {
    bandText: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.fetchByArtist(this.state.bandText)
    this.setState({
      [event.target.name]: ''
    })
    this.props.incremSearchCount()
    this.props.deleteBandsintownArtists()
    this.props.deleteSongkickArtists()
  }


  render() {
    return (
      <div className="col-md-6">
        <form id='bandForm' name='bandText'
              onSubmit={ event => this.handleOnSubmit(event) }>
          <div className="form-group">
            <label htmlFor="bandInput">Search for Bands:</label>
            <input type='text'
                   className="form-control"
                   id="bandInput" name='bandText'
                   onChange={ event => this.handleChange(event) } value={ this.state.bandText } />
          </div>
          <button type="submit"
                  ref='submitButton'
                  className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default ArtistForm
