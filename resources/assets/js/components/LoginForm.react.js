/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, Control, Errors } from 'react-redux-form';
import { isRequired, isEmail } from './validator';

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(user) {  
      const { dispatch } = this.props;
    }

    render() {

      const isRequired = (val) => val && val.length;

      // Render either the Log In and register buttons, or the logout button
      // based on the current authentication state.
      return(
          <div className="login-box animated">
            <h1>Sign in</h1>
            <Form model="user" onSubmit={this.handleSubmit}>
              <div className="form-group has-feedback">
                <div className="form-group has-feedback" >
                  <Control.text 
                    className="form-control" 
                    placeholder="Email address" 
                    model="user.email" 
                    validators={{ isRequired, isEmail }}
                  />
                  <Errors
                    show={{touched: true, focus: false}}
                    className="validation-message"
                    model="user.email"
                    messages={{
                      isRequired: 'Email is required.',
                      isEmail: (val) => `${val} is not a valid email.`,
                    }}
                  />
                </div>
                <div className="form-group has-feedback" >
                  <Control.text  
                    className="form-control"  
                    model="user.password"  
                    placeholder="Password"
                    validators={{ isRequired }}
                  />
                  <Errors
                    show={{touched: true, focus: false}}
                    className="validation-message"
                    model="user.password"
                    messages={{
                      isRequired: 'Password is required.',
                    }}
                  />
                </div>
                <a><small>Forgot password?</small></a>
                <button type="submit" className="btn btn-primary block full-width m-b">Sign In</button>
                <div className="extra-action">
                    <p className="welcome">Do not have an account?</p>
                    <a className="sref">Register</a>
                </div>
              </div>
            </Form>
          </div>

      );
  }
}

LoginForm.propTypes = {
  user: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
  }).isRequired
};

export default connect()(LoginForm);
