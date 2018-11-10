import React, { Component } from 'react';

class SignupForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.signupThroughApi(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="col-md-4">
      <h2>SIGNUP</h2>

        <form name='signup'
              onSubmit={ event => this.handleOnSubmit(event) }>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type='text'
                   className="form-control"
                   id="email" name='email'
                   onChange={ event => this.handleChange(event) } value={ this.state.email } />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type='text'
                   className="form-control"
                   id="password" name='password'
                   onChange={ event => this.handleChange(event) } value={ this.state.password } />
          </div>

          <button type="submit"
                  className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;
