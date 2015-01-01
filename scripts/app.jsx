'use strict';

var React = require('react');
window.React = React;

var Recipe = require('./components/Recipe.jsx');

React.render(<Recipe />, document.getElementById('content'));
