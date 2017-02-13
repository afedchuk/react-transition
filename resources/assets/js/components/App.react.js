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
import Navheader from './Nav.react';
import Footer from './Footer.react';

class App extends Component {
  render() {
    return(
    	<div>
	        <header>
	            <Navheader/>
	        </header>
	        <section>
	            { this.props.children }
	        </section>
	        <footer>
	            <Footer/>
	        </footer>
	    </div>
    )
  }
}

export default App;