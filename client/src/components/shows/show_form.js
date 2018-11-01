import React, { Component } from 'react';


class ShowForm extends Component {

  state = {
    bandText: '',
    cityText: ''
  }

  handleChange = (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
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

        OR<br /><br />

        <form name='cityText' onSubmit={ event => this.handleOnSubmit(event) }>
        City: <br />
        <input type='text' name='cityText' onChange={ event => this.handleChange(event) } value={ this.state.cityText } />
        <input type='submit' />
        </form><br /><br />
      </div>
    )
  }
}

export default ShowForm;
