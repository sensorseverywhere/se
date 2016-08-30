import './create-project.scss';

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
  closeModal: function() {
    this.setState({ showDiv: "none" });
  },
  addProject: function(){
    var self = this;
    var date_added = new Date();
    //change date to django format
    date_added = date_added.toISOString();

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
  },
  render: function() {
    var style = { display: this.state.showDiv, top: "-10px"};
    var addProjectBody = <div>
                            <label>Name:</label>
                            <input type="text" className="form-control" id="createProjectName"/>
                            <label>Description:</label>
                            <input type="text" className="form-control" id="createProjectDescription"/>
                              <div id="mapContainer">

                              </div>
                            <button style={{marginTop: "20px"}} className="btn btn-primary" onClick={this.addProject}>Create Project</button>
                         </div>
    return (
      <div>
        <AddProjectDiv style={style} title="Create a Project" body={addProjectBody} />
      </div>
    )
  }
});

var AddProjectDiv = React.createClass({
  render: function () {
    return (
      <div id="addProjectModal" style={this.props.style}>
        <div className="">
          <div className="">
            <div className="">
              <button type="button" className="close"></button>
              <h4 className="">{this.props.title}</h4>
            </div>
            <div className="">
              {this.props.body}
              <br />
              {this.props.matches}
            </div>
            <div className="" style={{clear: "both"}}>
              {this.props.close}
          </div>
        </div>
      </div>
    </div>
    )
  }
});

ReactDOM.render(
  <AddProject />,
  document.getElementById("add-project")
)
