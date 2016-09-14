var $ = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");


var AddProject = React.createClass({
  getInitialState: function() {
    return { showDiv: "inherit" }
  },
  componentDidMount: function() {
    var self = this;
    document.addEventListener("addProject", function(e) {
      self.showDiv();
    }, false);
  },
  showDiv: function() {
    this.setState({ display: "block"});
  },
  addProject: function(){
    var self = this;
    var date_added = new Date();
    //change date to django format
    date_added = date_added.toISOString();
    //data to be send to DRF api endpoint
    var sendData = { name: $("#createProjectName").val(), description: $("#createProjectDescription").val(), date_added: date_added}
    $.ajax({
      url: "http://127.0.0.1:8000/project/projects/",
      dataType: "json",
      method: "POST",
      data: sendData,
      success: function(data) {
        var id = data.id
      }.bind(this),
      error: function(xhr, status, err) {
          console.log("localhost:8000/project/project", status, err.toString());
      }.bind(this)
    });
  }
});

var Project = React.createClass({

});
