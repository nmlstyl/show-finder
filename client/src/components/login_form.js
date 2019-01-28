import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.myPassword = React.createRef()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.loginThroughApi(this.state.email, this.state.password, null)
    this.setState({
      email: '',
      password: ''
    })
  }

  showHidePw = () => {
    if (this.myPassword.current.type === "password") {
        this.myPassword.current.type = "text";
    } else {
        this.myPassword.current.type = "password";
    }
  }

  render() {
    return (
      <div className="col-md-4">
      <h2>LOGIN</h2>

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
            <input type='password'
                   ref={this.myPassword}
                   className="form-control"
                   id="password"
                   name='password'
                   onChange={ event => this.handleChange(event) } value={ this.state.password } /><br></br>
            <input type="checkbox" onClick={ () => this.showHidePw() }/> Show Password
          </div>

          <button type="submit"
                  className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
