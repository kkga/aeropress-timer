var React = require('react'),
    StepsList = require('./StepsList.jsx'),
    Step = require('./Step.jsx'),
    RECIPES = require('../recipes.json');

var Recipe = React.createClass({

  calculateDuration: function(recipe) {
    var totalDuration = 0;

    recipe.steps.forEach(function(step) {
      totalDuration += step.duration;
    });

    return totalDuration;
  },

  render: function() {
    var recipe = RECIPES[0],
        steps = recipe.steps,
        isInverted = recipe.inverted;
        totalSteps = recipe.steps.length,
        totalDuration = this.calculateDuration(recipe);

    return (
      <div>
        <h4>{recipe.name}</h4>
        {isInverted && <small>Inverted</small>}

        <br /><br />

        <StepsList steps={steps} />
        <p>
          Steps: {totalSteps}
          <br />
          Duration: {totalDuration}s
        </p>
      </div>
    );
  }
});

module.exports = Recipe;
