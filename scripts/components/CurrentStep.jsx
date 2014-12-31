// 'use strict';

var React = require('react');

var CurrentStep = React.createClass({
  render: function() {
    var isActiveStep = this.props.seconds > this.props.step.seconds;

    var stepStyle = {
      backgroundColor: isActiveStep ? 'red' : 'skyblue'
    };

    return (
      <div style={stepStyle}>
        <span>{this.props.step.action}</span>
        {' '}
        <span>{this.props.step.seconds}</span>
      </div>
    );
  }
});

module.exports = CurrentStep;
