const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./landing');
const ReactRouter = require('react-router');
const { Router, Route, hashHistory } = ReactRouter;

// return function arrow ( to exclude the return syntaxis with the ( instead of using { )

const App = () => (
  <Router history={hashHistory} >
    <Route path='/' component={Landing} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
