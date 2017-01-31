/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function render () {
    return (
      div(null,
        h1({ style: {color: this.props.color} }, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyComponent = (
    div(null,
       MyTitleFactory({title: 'Props are great', color: 'blue'}),
       React.createElement(MyTitle, {title: 'Use props everywhere', color: 'maroon'}),
       ce(MyTitle, {title: 'again props!', color: 'peru'})
    )
)

ReactDOM.render(MyComponent, document.getElementById('app'))
