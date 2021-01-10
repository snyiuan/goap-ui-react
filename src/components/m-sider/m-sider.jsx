import { Component } from "react";
import Conditions from "../conditions-list/conditions-list";
import Tasks from "../tasks/tasks";

export default class MSider extends Component {
  render() {
    return (
      <div>
        <Conditions></Conditions>
        <Tasks></Tasks>
      </div>
    );
  }
}
