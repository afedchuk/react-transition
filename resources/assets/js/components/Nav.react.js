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
import { Provider } from 'react-redux';

import store from '../reducers/login-reducer.js';
import LoginForm from './LoginForm.react';

export default class Navheader extends Component {
  render() {

    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    return(
        <div className="navbar-wrapper">
        <Provider store={ store }>
                          <LoginForm/>
                        </Provider>
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
              <NavDropdown eventKey="{5}" title="Sign In"  className="dropdown dropdown-navbar-box">
                  <Navbar.Collapse>
                    <Navbar.Text className="login-section-body">
                        
                    </Navbar.Text>
                  </Navbar.Collapse>
              </NavDropdown>
              <NavDropdown eventKey="{6}" title="Andrii Fedchuk"  className="dropdown dropdown-navbar-box">
                 <MenuItem eventKey={6.1}>Profile</MenuItem>
                 <MenuItem eventKey={6.2}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
      </div>
    );
  }
}
