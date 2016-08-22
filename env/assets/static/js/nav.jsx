var React = require("react")
var ReactDOM = require("react-dom")

var AddProject = React.createClass({
  getInitialState: function() {
    return { showModal: "none" }
  },
  componentDidMount: function() {
    var self = this;
    document.addEventListener("addProjectNav", function(e) {
      self.showModal();
    }, false);
  },
  showModal: function() {
    this.setState({ showModal: "inherit"});
  },
  closeModal: function() {
    this.setState({ showModal: "none" });
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
        window.location.href = "http://localhost:8000/project/project/" + id + "/";
      }.bind(this),
      error: function(xhr, status, err) {
          console.log("localhost:8000/project/project", status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var style = { display: this.state.showModal, top: "50px" };
    var close = <button className="btn btn-default" onClick={this.closeModal}>Close</button>;
    var addProjectBody = <div>
                            <label>Name:</label>
                            <input type="text" className="form-control" id="createProjectName"/>
                            <label>Description:</label>
                            <input type="text" className="form-control" id="createProjectDescription"/>

                            <button style={{marginTop: "20px"}} className="btn btn-primary" onClick={this.addProject}>Create Project</button>
                         </div>
    return (
      <div>
        <AddProjectModal style={style} title="Create a Project" close={close} body={addProjectBody} />
      </div>
    )
  }
});

var AddProjectModal = React.createClass({
  render: function () {
    return (
      <div id="addProjectModal" className="modal" style={this.props.style}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close"></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.body}
              <br />
              {this.props.matches}
            </div>
            <div className="modal-footer" style={{clear: "both"}}>
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
