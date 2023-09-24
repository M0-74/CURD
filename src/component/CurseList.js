import React, { Component } from "react";

class CurseList extends Component {
  state = {
    IsEdit: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.data.name}</span>
        <button onClick={() => this.toggle()}>Edit Course</button>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete
        </button>
      </li>
    );
  };

  toggle = () => {
    let { IsEdit } = this.state;
    this.setState({
      IsEdit: !IsEdit,
    });
  };

  updateCourse = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggle();
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourse}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.data.name}
        />
        <button>Upadate</button>
      </form>
    );
  };
  render() {
    let { IsEdit } = this.state;
    return (
      <React.Fragment>
        {IsEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
}
export default CurseList;
