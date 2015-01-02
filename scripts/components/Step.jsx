var React = require('react');

var Step = React.createClass({
  render: function() {
    var action = this.props.action,
        duration = this.props.duration,
        isActive = this.props.active,
        isCompleted = this.props.completed;

        stepStyle = {
          border: '1px solid skyblue'
        },

        activeStepStyle = {
          border: '1px solid skyblue',
          backgroundColor: 'skyblue',
          color: 'white'
        };

    return (
      <div style={isActive ? activeStepStyle : stepStyle}>
        <span>{action}</span>
        {' '}
        <span>{isCompleted ? 0 : duration}s</span>
      </div>
    );
  }
});

module.exports = Step;
