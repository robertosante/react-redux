const React = require('react');
const chai = require('chai');
const { expect } = chai;
const Search = require ('../js/Search');
const ShowCard = require('../js/ShowCard');
const { mount, shallow } = require('enzyme');
const { shows } = require('../public/data');

'use strict';

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />);
    // console.log(wrapper.debug());
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  });

  it('should render as many shows as we have in the data file', () => {
  	const wrapper = shallow(<Search />);
  	expect(wrapper.find(ShowCard).length).to.equal(shows.length);
  });

  it('should filter correctly given new state', () => {
  	const wrapper = mount(<Search />);

  	const input = wrapper.find('.search-input');
  	input.node.value = 'house';
  	input.simulate('change');
  	//console.log(wrapper.debug());
  	expect(wrapper.state('searchTerm')).to.equal('house');
  	expect(wrapper.find('.show-card').length).to.equal(2);
  });

});
