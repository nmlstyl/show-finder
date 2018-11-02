import React, { Component } from 'react';
import ShowForm from '../components/shows/show_form'
import Shows from '../components/shows/shows'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class ShowContainer extends Component {

  render() {
    return (
      <div>
        Find Shows By:
        <br /><br />
        <ShowForm fetchByArtist={ this.props.actions.fetchByArtist } />
        <Shows />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {artists: state.artists,
          shows: state.shows}
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
