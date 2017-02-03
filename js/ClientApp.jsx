const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Search = require('./Search');
const Layout = require('./Layout');
const Details = require('./Details');
const ReactRouter = require('react-router');
const { Router, Route, hashHistory, IndexRoute } = ReactRouter;
const { shows } = require('../public/data');

'use strict';
// return function arrow ( to exclude the return syntaxis with the ( instead of using { )

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id);

    if (showArray.length < 1) {
      return replace('/');
    }

    Object.assign(nextState.params, showArray[0]);
    return nextState;
  },
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
