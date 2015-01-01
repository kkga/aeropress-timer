var React = require('react');

var Step = React.createClass({
  render: function() {
    var action = this.props.action,
        duration = this.props.duration,
        isActive = this.props.active,

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
        <span>{duration}s</span>
      </div>
    );
  }
});

module.exports = Step;
