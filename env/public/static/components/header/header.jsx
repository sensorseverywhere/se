require('./header.scss');

var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

var holder = React.createClass({
  render: function () {
    return <div>something</div>;
  }
});
$(document).ready(function () {
  ReactDOM.render(<holder />, document.getElementById('holder'));
});
