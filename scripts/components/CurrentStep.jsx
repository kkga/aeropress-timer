// 'use strict';

var React = require('react');

var CurrentStep = React.createClass({
  getInitialState: function() {
    return {
      stepIndex: 0
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var recipe = this.props.recipe,
        currentStep = recipe.steps[this.state.stepIndex];

    this.setState({
      stepIndex: nextProps.secondsElapsed >= currentStep.seconds ?
                 this.state.stepIndex + 1 :
                 this.state.stepIndex
    });
  },

  render: function() {
    var recipe = this.props.recipe,
        currentStep = recipe.steps[this.state.stepIndex];

    var stepStyle = {
      backgroundColor: 'skyblue'
    };

    return (
      <div style={stepStyle}>
        <span>{currentStep.action}</span>
        {' '}
        <span>{currentStep.seconds}</span>
      </div>
    );
  }
});

module.exports = CurrentStep;
