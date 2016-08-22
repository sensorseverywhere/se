var React = require('react')

module.exports = React.createClass({
  getInitialState: function(){
    return {customText: ''};
  },
  customClickFunction: function() {
    this.setState({customText: "Thanks for submitting your project."});
  },
  render: function() {
    var style = {fontSize: '18px', color: 'blue' };

    return (
          <div style={style}>
            <h3>{this.state.customText}</h3>
              <button onClick={this.customClickFunction}>Save Project</button>
          </div>
    )
  }
});
