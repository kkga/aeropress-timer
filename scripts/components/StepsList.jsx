var React = require('react'),
    Step = require('./Step.jsx');

var StepsList = React.createClass({
  getInitialState: function() {
    return {
      activeStepIndex: null,
      secondsElapsed: 0,
      isTimerActive: false
    };
  },

  tick: function() {
    var steps = this.props.steps,
        activeStepIndex = this.state.activeStepIndex,
        activeStepDuration = steps[activeStepIndex].duration,
        secondsElapsed = this.state.secondsElapsed;

    this.setState({secondsElapsed: this.state.secondsElapsed + 1});

    if (activeStepDuration === secondsElapsed + 1) {
      this.setState({
        activeStepIndex: this.state.activeStepIndex + 1,
        secondsElapsed: 0
      });
    }

    if (activeStepIndex === steps.length) {
      this.setState({isTimerActive: false});
      clearInterval(this.interval);
      console.log('timer stoped!');
    }
  },

  startTimer: function() {
    this.setState({
      isTimerActive: true,
      activeStepIndex: 0
    });
    this.interval = setInterval(this.tick, 1000);
  },

  stopTimer: function() {
    clearInterval(this.interval);
    this.setState({
      isTimerActive: false,
      activeStepIndex: null,
      secondsElapsed: 0
    });
  },

  render: function() {
    var steps = this.props.steps,
        activeStepIndex = this.state.activeStepIndex,
        secondsElapsed = this.state.secondsElapsed,
        isTimerActive = this.state.isTimerActive;

    return (
      <div>
        {steps.map(function(step, i) {
          var isActiveStep = i === activeStepIndex,
              isCompletedStep = i < activeStepIndex;

          return <Step action={step.action}
                       duration={isActiveStep ? step.duration - secondsElapsed : step.duration}
                       active={isActiveStep}
                       completed={isCompletedStep} />;
        })}

        <button onClick={isTimerActive ? this.stopTimer : this.startTimer}>
          {isTimerActive? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
});

module.exports = StepsList;
