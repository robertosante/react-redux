var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;
var MyTitle = require('./MyTitle');

var MyTitleFactory = React.createFactory(MyTitle);
var ce = React.createElement;

var MyComponent = (
    div(null,
       MyTitleFactory({title: 'Props are great', color: 'blue'}),
       React.createElement(MyTitle, {title: 'Use props everywhere', color: 'maroon'}),
       ce(MyTitle, {title: 'again props!', color: 'peru'})
    )
);

ReactDOM.render(MyComponent, document.getElementById('app'));
