import React, { Component } from 'react';

class ShowForm extends Component {

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
      <div>
        <form name='bandText' onSubmit={ event => this.handleOnSubmit(event) }>
        Band: <br />
        <input type='text' name='bandText' onChange={ event => this.handleChange(event) } value={ this.state.bandText } />
        <input type='submit' />
        </form><br />
      </div>
    )
  }
}

export default ShowForm;
