/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navheader from './Navheader.react';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Navheader loggedIn={this.props.data.loggedIn} history={this.props.history} location={this.props.location} dispatch={this.props.dispatch} currentlySending={this.props.data.currentlySending} />
        { this.props.children }
</div>
    )
  }
}

export default App;