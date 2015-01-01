var React = require('react'),
    Step = require('./Step.jsx');

var StepsList = React.createClass({
  getInitialState: function() {
    return {
      activeStepIndex: 0,
      secondsElapsed: 0
    };
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});

    if (this.props.steps[this.state.activeStepIndex].duration < this.state.secondsElapsed) {
      this.setState({activeStepIndex: this.state.activeStepIndex + 1});
      this.setState({secondsElapsed: 0});
    }
  },

  startCounter: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  stopCounter: function() {
    clearInterval(this.interval);
    this.setState({secondsElapsed: 0});
  },


  componentWillReceiveProps: function(nextProps) {
    var recipe = this.props.recipe,
        step = recipe.steps[this.state.activeStepIndex];

    this.setState({
      activeStepIndex: nextProps.secondsElapsed >= step.seconds ?
                 this.state.activeStepIndex + 1 :
                 this.state.activeStepIndex
    });
  },

  render: function() {
    var steps = this.props.steps,
        activeStepIndex = this.state.activeStepIndex,
        secondsElapsed = this.state.secondsElapsed;

    return (
      <div>
        {steps.map(function(step, i) {
          var isActive = i === activeStepIndex;

          return <Step action={step.action}
                       duration={isActive ? step.duration - secondsElapsed : step.duration}
                       active={isActive} />;
        })}
        <button onClick={this.startCounter}>Start</button>
        <button onClick={this.stopCounter}>Stop</button>

      </div>
    );
  }
});

module.exports = StepsList;
