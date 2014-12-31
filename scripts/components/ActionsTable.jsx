// 'use strict';

var React = require('react');

var StepRow = React.createClass({
  render: function() {
    var isActiveStep = this.props.seconds > this.props.step.seconds;

    var rowStyle = {
      backgroundColor: isActiveStep ? 'red' : 'skyblue'
    };

    return (
      <tr style={rowStyle}>
        <td>{this.props.step.action}</td>
        <td>{this.props.step.seconds}</td>
      </tr>
    );
  }
});

var ActionsTable = React.createClass({
  render: function() {
    var rows = [],
        seconds = this.props.seconds;

    this.props.recipe[0].steps.forEach(function(step) {
      rows.push(<StepRow step={step} seconds={seconds} />);
    });

    return (
      <table>
        <span>
          {this.props.recipe[0].name}
        </span>
        <thead>
          <tr>
            <th>Action</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ActionsTable;
