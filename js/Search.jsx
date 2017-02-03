const React = require('react');
const ShowCard = require('./ShowCard');
const Header = require('./Header');
// const data = require('../public/data');
const { object } = React.PropTypes;
'use strict';

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    };
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({
      searchTerm
    });
  },
  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    });
  },
  render () {
    return (
      <div className='container'>
        <Header handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => (
              `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            )
            .map((show) => (
              <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    );
  }
});

module.exports = Search;
