var $ = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");

export class MapControl extends React.Component {
  constructor() {
    super(); //gives context
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({ val: this.state.val+1 })
  }
  render() {
    return (
            <div>
              <button onClick={this.update}>{this.state.val}</button>
            </div>
          )
  }
}


ReactDOM.render(
  <MapControl />,
  document.getElementById("map-control")
)
