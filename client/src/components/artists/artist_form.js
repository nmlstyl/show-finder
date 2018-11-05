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
  }

  render() {
    return (
      <div class="col-md-4">
        <form name='bandText' onSubmit={ event => this.handleOnSubmit(event) }>
          <div class="form-group">
            <label for="bandInput">Search for Bands:</label>
            <input type='text' class="form-control" id="bandInput" name='bandText' onChange={ event => this.handleChange(event) } value={ this.state.bandText } />
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default ArtistForm;
