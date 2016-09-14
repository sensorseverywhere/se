var $ = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");


class Tabs extends React.Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({index: this.state.index + 1 })
    console.log(this.state.index)
  }
  componentWillMount() {
    //state is ready to go into the DOM
    console.log('mount create project')
  }
  render () {
    return(
      <div>
        <div id="dashboard-container">
          <div id="map">Map goes here</div>
          <div id="map-control">Just something to show</div>
        </div>
    </div>
    )
  }
  componentDidMount() {
    console.log('mounted')
  }
  componentWillUnmount() {
    console.log('unmounting')
  }
}


export class TabWrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<Dashboard/>, document.getElementById('mountNode'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('mountNode'))
  }
  render () {
    return(
      <div>
      <ul>
        <li><a href="#" onClick={this.mount.bind(this)}>Create</a></li>
        <li><a href="#" onClick={this.unmount.bind(this)}>Subscribe</a></li>
      </ul>
      <div id="mountNode"></div>
    </div>
    )
  }
}

ReactDOM.render(
  <TabWrapper/>, document.getElementById("tabs")
)
