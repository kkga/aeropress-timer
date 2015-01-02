var React = require('react');

var Step = React.createClass({
  render: function() {
    var action = this.props.action,
        duration = this.props.duration,
        secondsElapsed = this.props.secondsElapsed,
        stepProgress = this.props.stepProgress,
        isActive = this.props.active,
        isCompleted = this.props.completed;

        stepStyle = {
          border: '1px solid skyblue'
        },

        activeStepStyle = {
          position: 'relative',
          border: '1px solid skyblue',
          backgroundColor: 'skyblue',
          color: 'white'
        },

        progressBarStyle = {
          position: 'absolute',
          top: 0, bottom: 0, left: 0,
          backgroundColor: 'red',
          width: stepProgress,
          transition: 'width 1s linear',
          opacity: 0.25
        };

    return (
      <div style={isActive ? activeStepStyle : stepStyle}>
        {isActive &&
          <div style={progressBarStyle} />
        }
        <span>{action}</span>
        {' '}
        <span>{isCompleted ? 0 : duration}s</span>
      </div>
    );
  }
});

var Steps = React.createClass({
  render: function() {
    var steps = this.props.steps,
        activeStepIndex = this.props.activeStepIndex,
        secondsElapsed = this.props.secondsElapsed;

    return (
      <div>
        {steps.map(function(step, i) {
          var isActiveStep = i === activeStepIndex,
              isCompletedStep = i < activeStepIndex,
              stepProgress = (secondsElapsed / step.duration) * 100 + '%';

          return <Step action={step.action}
                       duration={isActiveStep ? step.duration - secondsElapsed : step.duration}
                       secondsElapsed={secondsElapsed}
                       stepProgress={stepProgress}
                       active={isActiveStep}
                       completed={isCompletedStep} />;
        })}
      </div>
    );
  }
})

module.exports = Steps;
