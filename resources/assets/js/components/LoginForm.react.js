/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
         super(props);
         console.log(this.props);
    }
     // onSubmit call the passed onSubmit function
    _onSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.props.data.username, this.props.data.password);
    }

    // Change the username in the app state
    _changeUsername(evt) {
        var newState = this._mergeWithCurrentState({
          username: evt.target.value
        });

        this._emitChange(newState);
    }

    // Change the password in the app state
    _changePassword(evt) {
        var newState = this._mergeWithCurrentState({
          password: evt.target.value
        });

        this._emitChange(newState);
    }

    // Merges the current state with a change
    _mergeWithCurrentState(change) {
        return assign(this.props.data, change);
    }

    // Emits a change of the form state to the application state
    _emitChange(newState) {
        this.props.dispatch(changeForm(newState));
    }

    render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    return(
        <div className="login-box animated">
          <h1>Sign in</h1>
          <form method="post" onSubmit={this._onSubmit.bind(this)}>
            <div className="form-group has-feedback">
              <input type="text" id="username" className="form-control" placeholder="Email address" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
              <span className="validation-message">
                <p className="help-block"></p>
                <p className="help-block">Email is required.</p>
                <p className="help-block">This is not a valid email.</p>
              </span>
            </div>
            <div className="form-group has-feedback" >
              <input type="password" className="form-control" placeholder="Password" name="password" />
              <span className="validation-message">
                <p className="help-block">Password is required.</p>
              </span>
            </div>
            <a><small>Forgot password?</small></a>
            <button type="submit" className="btn btn-primary block full-width m-b">Sign In</button>
            <div className="extra-action">
                <p className="welcome">Do not have an account?</p>
                <a className="sref">Register</a>
            </div>
          </form>
        </div>

    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  btnText: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
}

export default LoginForm;
