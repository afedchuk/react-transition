/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import LoginForm from './LoginForm.react';

export default class Navheader extends Component {
  constructor(props) {
      super(props);
  }

  render() {

    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    return(
        <div className="navbar-wrapper">
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                  <div className="navbar-header page-scroll">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <Navbar.Brand>
                        <a href="/" className="navbar-brand">Advertisement</a>
                      </Navbar.Brand> 
                  </div>
                  <div className="navbar-collapse collapse" >
                    <Nav className="navbar-nav navbar-right">
                      <NavItem eventKey={1} className="page-scroll" href="#page-top">Home</NavItem>
                      <NavItem eventKey={2} className="page-scroll" href="#features">Features</NavItem>
                      <NavItem eventKey={3} className="page-scroll" href="#testimonials">Testimonials</NavItem>
                      <NavItem eventKey={4} className="page-scroll" href="#pricing">Pricing</NavItem>
                      <NavItem eventKey={4} className="page-scroll" href="#contact">Contact</NavItem>
                      <NavDropdown eventKey="{5}" title="Sign In"  className="dropdown dropdown-navbar-box">
                        <MenuItem eventKey="{5.1}">
                            <div className="login-section-body">
                                <LoginForm/>
                            </div>
                        </MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey="{6}" title="Andrii Fedchuk"  className="dropdown dropdown-navbar-box">
                         <MenuItem eventKey={6.1}>Profile</MenuItem>
                         <MenuItem eventKey={6.2}>Logout</MenuItem>
                      </NavDropdown>
                    </Nav>
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}
