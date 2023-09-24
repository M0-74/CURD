import React, { Component } from "react";
import CurseForm from "./component/CurseForm";
import CurseList from "./component/CurseList";
class App extends Component {
  state = {
    courses: [{ name: "html" }, { name: "css" }, { name: "js" }],
    current: "",
  };
  /***/
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  /***/

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: "",
    });
  };

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({ courses });
  };

  render() {
    let { courses } = this.state;
    let courseList = courses.map((course, index) => {
      return (
        <CurseList
          data={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });

    return (
      <div className="App">
        <h2>add tasks</h2>
        <CurseForm
          current={this.state.current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
        />
        <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;
