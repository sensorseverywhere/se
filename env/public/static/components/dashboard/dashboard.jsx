require('./dashboard.scss');

var $ = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");


class Dashboard extends React.Component{
  constructor(){
    super();
    this.state = { active: false }
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({active: e.target.value})
  }
  render() {
      return (
          <div>
              <Tabs />
              <div id="mountPoint"></div>
           </div>
         )
     }
}

class Tabs extends React.Component {

  constructor(){
    super();
    this.mount.bind(this, 4)
  }

  mount(val){
    if(val === 1) {
        ReactDOM.render(<CreateProject/>, document.getElementById('mountPoint'))
    } else if(val === 2) {
      ReactDOM.render(<SubscribeToProject/>, document.getElementById('mountPoint'))
    }
    else if(val === 3) {
      ReactDOM.render(<SensorData/>, document.getElementById('mountPoint'))
    }
    else if(val === 4) {
      ReactDOM.render(<ListProjects/>, document.getElementById('mountPoint'))
    }
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(<Dashboard/>, document.getElementById('mountPoint'))
  }
  render() {
    return (
      <div className="dashboard-context-menu">
        <div id="tabs">
          <ul>
            <li><a href="#" onClick={this.mount.bind(this, 1)}>Create</a></li>
            <li><a href="#" onClick={this.mount.bind(this, 2)}>Subscribe</a></li>
            <li><a href="#" onClick={this.mount.bind(this, 3)}>Data</a></li>
            <li><a href="#" onClick={this.mount.bind(this, 4)}>Projects</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

class CreateProject extends React.Component {

  componentWillMount() {
    window.addLeaflet();
  }
  render() {
    return(
      <div id="dashboard-container">
       <div id="map">
         <center><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
         <span className="sr-only">Loading...</span></center>
       </div>
       <div id="map-control">
         <h3>Map Control</h3>
       </div>
     </div>
   )
  }
}

class SubscribeToProject extends React.Component {
  render() {
    return(
      <div id="dashboard-container">
       <div id="subscribe-to-project">Subscribe</div>
     </div>
   )
  }
}

class SensorData extends React.Component {
  render() {
    return(
      <div id="dashboard-container">
       <div id="project-data-container">Data One</div>
       <div id="project-data-container">Data Two</div>
       <div id="project-data-container">Data Three</div>
     </div>
   )
  }
}

class ListProjects extends React.Component {
  render() {
    return(
      <div id="dashboard-container">
       <div id="list-projects">A list of all projects you're a part of.</div>
     </div>
   )
  }
}

ReactDOM.render(
  <Dashboard />,
  document.getElementById("dashboard")
)
