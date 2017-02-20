import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

export default (
  <Route path="/" component={App}>
    <Route path="/sign-in" component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="*" component={NotFound}/>
  </Route>
);