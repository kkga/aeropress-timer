// 'use strict';

var React = require('react'),
    ActionsTable = require('./ActionsTable.jsx'),
    RECIPES = require('../recipes.json');

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  startCounter: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  stopCounter: function() {
    clearInterval(this.interval);
    this.setState({secondsElapsed: 0});
  },


  render: function() {
    return (
      <div>
        <h1 className="Timer">Timer</h1>
        <button onClick={this.startCounter}>Start</button>
        <button onClick={this.stopCounter}>Stop</button>
        <br />
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <br />
        <ActionsTable recipe={RECIPES} seconds={this.state.secondsElapsed} />
      </div>
    );
  }
});

module.exports = Timer;
