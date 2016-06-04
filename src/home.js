'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
}

ReactDOM.render(
  <HomeContainer />,
  document.getElementById('container')
);
