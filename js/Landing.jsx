const React = require('react');
const { Link } = require('react-router');

'use strict';
// return function arrow ( to exclude the return syntaxis with the ( instead of using function{ )
const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'>or Browse All</Link>
    </div>
  </div>
);

module.exports = Landing;
