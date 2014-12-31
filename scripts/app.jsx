'use strict';

var React = require('react');
window.React = React;

var Timer = require('./components/Timer.jsx');

React.render(<Timer />, document.getElementById('content'));
