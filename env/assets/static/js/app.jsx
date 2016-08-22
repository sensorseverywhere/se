var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./app')

var projects = [
  {name: "Cobaws", image: "http://www.roundthebend.org.au/wp-content/gallery/tuans/tuan-dsc0224.jpg"},
  {name: "Hanging Rock", image: "http://www.weekendnotes.com/im/003/05/llama-face-hanging-rock-victoria-treks.jpg"},
  {name: "Mt Macedon", image: "http://www.visitvictoria.com/-/media/images/daylesford-and-the-macedon-ranges/things-to-do/nature-and-wildlife/echidna-macedon_dmr_r_supplied-dmrt-0502-ag-2015_1500x863.jpg?ts=20160420020314&w=480&h=360&crop=1%7C/-/media/images/daylesford-and-the-macedon-ranges/things-to-do/nature-and-wildlife/echidna-macedon_dmr_r_supplied-dmrt-0502-ag-2015_1500x863.jpg?ts=20160420020314&w=720&h=540&crop=1"}
];

var ProjectComponent = React.createClass({
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
              {this.props.projects.map(function(project){
                return (
                   <Project name={project.name} image={project.image}/>
                 )
              })}
          </div>
    )
  }
});

var Project = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} />
      </div>
    )
  }
})

ReactDOM.render(
      <ProjectComponent projects={projects}/>,
      document.getElementById('react-app')
    )
