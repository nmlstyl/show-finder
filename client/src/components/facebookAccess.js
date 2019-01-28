import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookAccess extends Component {

  responseFacebook = (response, loginOrSignupThroughApi) => {
    debugger
    console.log(response);
  }

  render(){
    return (
      <FacebookLogin appId="1396912973772758"
             autoLoad={true}
             fields="name,email,picture"
             onClick={ this.componentClicked }
             callback={ (resp) => this.responseFacebook(resp, this.props.action) }
             cssClass="my-facebook-button-class"
             icon="fa-facebook"/>
    )
  }


}

export default FacebookAccess
