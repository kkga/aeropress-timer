// 'use strict';

var React = require('react');

var RECIPE = [
  {action: 'Pour Water', seconds: 30},
  {action: 'Stir', seconds: 10},
  {action: 'Steep', seconds: 30},
  {action: 'Plunge', seconds: 30}
];

var ActionRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.step.action}</td>
        <td>{this.props.step.seconds}</td>
      </tr>
    );
  }
});

var ActionsTable = React.createClass({
  render: function() {
    var rows = [];
    var recipe = RECIPE;

    recipe.forEach(function(step) {
      rows.push(<ActionRow step={step} />);
    });

    return (
      <table>
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
