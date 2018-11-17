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

  componentDidMount(){
    if (this.props.searchValue !== null){
      debugger
      this.setState({
        bandText: decodeURIComponent(this.props.searchValue)
      })
    }
  }

  render() {
    return (
      <div className="col-md-4">
        <form name='bandText'
              onSubmit={ event => this.handleOnSubmit(event) }>
          <div className="form-group">
            <label htmlFor="bandInput">Search for Bands:</label>
            <input type='text'
                   className="form-control"
                   id="bandInput" name='bandText'
                   onChange={ event => this.handleChange(event) } value={ this.state.bandText } />
          </div>
          <button type="submit"
                  className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default ArtistForm;
