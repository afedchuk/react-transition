import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

export default (
  <Route path="/" component={App}>
    <Route path="/signin" component={SignIn} />
    <Route path="*" component={NotFound}/>
  </Route>
);