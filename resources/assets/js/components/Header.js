import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import SignInFormContainer from '../containers/SignInFormContainer.js';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

	render() {
      const container = 
      <NavDropdown id="login-dropdown-box" eventKey="{5}" title="Sign In" to="/sign-in"  className="dropdown dropdown-navbar-box">
            <SignInFormContainer />
      </NavDropdown>

      const { type, authenticatedUser } = this.props;

      if(authenticatedUser) {
        
      }

			return (
        <div className="navbar-wrapper">
            <Navbar className="navbar-fixed-top">
              <Navbar.Header >
                <Navbar.Brand>
                  <a href="/" className="navbar-brand">Advertisement</a>
                </Navbar.Brand> 
              </Navbar.Header>
              <Nav className="navbar-nav navbar-right">
                <NavItem eventKey={1} className="page-scroll" href="#page-top">Home</NavItem>
                <NavItem eventKey={2} className="page-scroll" href="#features">Features</NavItem>
                <NavItem eventKey={3} className="page-scroll" href="#testimonials">Testimonials</NavItem>
                <NavItem eventKey={4} className="page-scroll" href="#pricing">Pricing</NavItem>
                <NavItem eventKey={4} className="page-scroll" href="#contact">Contact</NavItem>
                {container}
              </Nav>
            </Navbar>
        </div>			
			);
	}
}

export default Header