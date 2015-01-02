var React = require('react'),
    Steps = require('./Steps.jsx');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      activeStepIndex: null,
      secondsElapsed: 0,
      isTicking: false
    };
  },

  tick: function() {
    var steps = this.props.steps,
        activeStepIndex = this.state.activeStepIndex,
        activeStepDuration = steps[activeStepIndex].duration,
        secondsElapsed = this.state.secondsElapsed;

    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    console.log(activeStepIndex);

    if ((activeStepDuration == secondsElapsed+1) && (activeStepIndex != steps.length-1)) {
      this.switchToNextStep();
    } else if ((activeStepIndex == steps.length-1) && (activeStepDuration == secondsElapsed+1)) {
      this.stopTimer();
    }
  },

  switchToNextStep: function() {
    this.setState({
      activeStepIndex: this.state.activeStepIndex + 1,
      secondsElapsed: 0
    });
  },

  startTimer: function() {
    this.setState({
      isTicking: true,
      activeStepIndex: 0
    });
    this.interval = setInterval(this.tick, 1000);
  },

  stopTimer: function() {
    this.setState({
      isTicking: false,
      activeStepIndex: null,
      secondsElapsed: 0
    });
    clearInterval(this.interval);
    console.log('timer stoped!');
  },

  render: function() {
    var steps = this.props.steps,
        activeStepIndex = this.state.activeStepIndex,
        secondsElapsed = this.state.secondsElapsed,
        isTicking = this.state.isTicking;

    return (
      <div>
        <Steps steps={steps}
               activeStepIndex={activeStepIndex}
               secondsElapsed={secondsElapsed} />

        <button onClick={isTicking ? this.stopTimer : this.startTimer}>
          {isTicking? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
});

module.exports = Timer;
