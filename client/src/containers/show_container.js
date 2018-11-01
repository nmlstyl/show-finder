import React, { Component } from 'react';
import ShowForm from '../components/shows/show_form'
import Shows from '../components/shows/shows'

class ShowContainer extends Component {

  render() {
    return (
      <div>
        Find Shows By:
        <br /><br />
        <ShowForm />
        <Shows />
      </div>
    )
  }
}

export default ShowContainer;
