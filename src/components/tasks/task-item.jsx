import { Card, List, Button, Row, Col, Menu, Dropdown, Popconfirm } from "antd";
import React from "react";
import { connect } from "react-redux";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  addGoal,
  removeGoal,
  removeTask,
  changeGoalChecked,
  setMainTask,
} from "../../redux/actions/actions";
import Checkbox from "antd/lib/checkbox/Checkbox";

const TaskItem = (props) => {
  const handleRemove = () => {
    props.dispatch(removeTask(props.index));
  };

  const handleAdd = (taskIndex, targetIndex) => {
    props.dispatch(addGoal(taskIndex, targetIndex));
  };

  const handleRemoveGoal = (index) => {
    props.dispatch(removeGoal(props.index, index));
  };

  const handleChangeChecked = (actionIndex, targetIndex, e) => {
    props.dispatch(
      changeGoalChecked(actionIndex, targetIndex, e.target.checked)
    );
  };
  const handleSetMainTask = (e) => {
    // console.log(e.target.checked);
    props.dispatch(setMainTask(props.index, e.target.checked));
  };

  const menu = (
    <Menu>
      {props.conditions.map((condition, index) => (
        <Menu.Item key={index} onClick={() => handleAdd(props.index, index)}>
          {condition.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Card
        style={{
          border: props.task.main ? "1px solid red" : "1px solid #d9d9d9",
        }}
        size="small"
        title={
          <Checkbox checked={props.task.main} onChange={handleSetMainTask}>
            {props.task.name}
          </Checkbox>
        }
        extra={
          <Popconfirm
            title="Are you sure to remove this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleRemove}
          >
            <Button
              icon={<MinusCircleOutlined />}
              type="link"
              size="small"
            ></Button>
          </Popconfirm>
        }
      >
        <List
          header={
            <Row justify="space-between">
              <Col>Goal Conditions:</Col>
              <Dropdown overlay={menu}>
                <Button
                  size="small"
                  type="link"
                  icon={<PlusCircleOutlined />}
                ></Button>
              </Dropdown>
            </Row>
          }
          dataSource={props.task.goalConditions}
          size="small"
          renderItem={(item, index) => (
            <Row justify="space-between" wrap="false">
              <Checkbox
                checked={item.checked}
                onChange={(e) => handleChangeChecked(props.index, index, e)}
                style={{ color: item.checked ? "green" : "red" }}
              >
                {props.conditions[item.index].name}
              </Checkbox>
              <Button
                type="link"
                icon={<MinusCircleOutlined />}
                size="small"
                onClick={() => handleRemoveGoal(index)}
              ></Button>
            </Row>
          )}
        ></List>
      </Card>
    </>
  );
};

export default connect((state) => ({
  conditions: state.models.conditions,
  tasks: state.models.tasks,
}))(TaskItem);
