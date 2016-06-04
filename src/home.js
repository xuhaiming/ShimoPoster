'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
});

ReactDOM.render(
  <HomeContainer />,
  document.getElementById('container')
);
