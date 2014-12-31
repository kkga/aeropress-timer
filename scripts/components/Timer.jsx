'use strict';

var React = require('react'),
    Counter = require('./Counter.jsx'),
    ActionsTable = require('./ActionsTable.jsx');


var Timer = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="Timer">Timer</h1>
        <Counter />
        <br />
        <ActionsTable />
      </div>
    )
  }
});

module.exports = Timer;
