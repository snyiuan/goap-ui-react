import { List } from "antd";
import React from "react";
import { connect } from "react-redux";
import TaskItem from "./task-item";
import "./tasks.css";

const Tasks = (props) => {
  return (
    <div className="tasks">
      <List
        dataSource={props.tasks}
        itemLayout="vertical"
        renderItem={(task, index) => (
          <List.Item>
            <TaskItem task={task} index={index}></TaskItem>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default connect(
  (state) => ({
    tasks: state.models.tasks,
  }),
  {}
)(Tasks);

// export default class Tasks extends Component {
//   render() {
//     return <div>task</div>;
//   }
// }
