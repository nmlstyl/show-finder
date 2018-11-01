import React, { Component } from 'react';
import ShowForm from '../components/show_form'

class ShowContainer extends Component {

  render() {
    return (
      <div>
        Find Shows By:
        <br /><br /> 
        <ShowForm />
      </div>
    )
  }
}

export default ShowContainer;
