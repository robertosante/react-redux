const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Search = require('./Search');
const Layout = require('./Layout');
const ReactRouter = require('react-router');
const { Router, Route, hashHistory, IndexRoute } = ReactRouter;

'use strict';
// return function arrow ( to exclude the return syntaxis with the ( instead of using { )

const App = () => (
  <Router history={hashHistory} >
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
