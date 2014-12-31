// 'use strict';

var React = require('react'),
    ActionsTable = require('./ActionsTable.jsx'),
    CurrentStep = require('./CurrentStep.jsx'),
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

  calculateDuration: function(recipe) {
    var totalSeconds = 0;

    recipe.steps.forEach(function(step) {
      totalSeconds += step.seconds;
    });

    return totalSeconds;
  },

  render: function() {
    var recipe = RECIPES[0],
        totalSteps = recipe.steps.length,
        totalDuration = this.calculateDuration(recipe);

    return (
      <div>
        <ActionsTable recipe={recipe} seconds={this.state.secondsElapsed} />
        <p>
          Steps: {totalSteps}
          <br />
          Duration: {totalDuration}s
        </p>

        <br />

        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <button onClick={this.startCounter}>Start</button>
        <button onClick={this.stopCounter}>Stop</button>

        <br />

        <CurrentStep step={recipe.steps[0]} />
      </div>
    );
  }
});

module.exports = Timer;
