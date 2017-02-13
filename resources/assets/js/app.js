// Import all the third party stuff
// import React from 'react';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// // Import the components used as pages
// import HomePage from './components/pages/HomePage.react';
// import NotFound from './components/pages/NotFound.react';
// import App from './components/App.react';


// // Mostly boilerplate, except for the Routes. These are the pages you can go to,
// // which are all wrapped in the App component, which contains the navigation etc
// ReactDOM.render(
//     <Router history={browserHistory}>
//       <Route component={App}>
//         <Route path="/" component={HomePage} />
//         <Route path="*" component={NotFound} />
//       </Route>
//     </Router>,
//   document.getElementById('app')
// );
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App.react';
import Home from './components/pages/HomePage.react';
import NotFound from './components/pages/NotFound.react';

render(
    <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="*" component={NotFound}/>
        </Route>
    </Router>
    , document.getElementById('app'));