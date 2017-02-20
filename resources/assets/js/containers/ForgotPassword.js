import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import ForgotPassword from '../components/ForgotPassword.js';

export default connect()(ForgotPassword);