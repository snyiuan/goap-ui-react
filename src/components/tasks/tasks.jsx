import React from "react";
import { connect } from "react-redux";
import TaskItem from "./task-item";

const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          conditions={props.conditions}
        ></TaskItem>
      ))}
    </>
  );
};

export default connect(
  (state) => ({
    tasks: state.tasks,
    conditions: state.conditions,
  }),
  {}
)(Tasks);

// export default class Tasks extends Component {
//   render() {
//     return <div>task</div>;
//   }
// }
