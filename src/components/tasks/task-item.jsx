import { Card, List, Button, Row, Col } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const TaskItem = (props) => {
  const handleRemove = () => {
    console.log("handleremove taskItem");
  };
  const handleAdd = () => {
    console.log("handleAdd TaskItem");
  };

  return (
    <>
      <Card
        size="small"
        title={props.task.name}
        extra={
          <Button
            icon={<MinusCircleOutlined />}
            type="link"
            size="small"
            onClick={handleRemove}
          ></Button>
        }
      >
        <List
          header={
            <Row justify="space-between">
              <Col>Goal Conditions:</Col>
              <Button
                icon={<PlusCircleOutlined />}
                type="link"
                size="small"
                onClick={handleAdd}
              ></Button>
            </Row>
          }
          dataSource={props.task.goalConditions}
          size="small"
          renderItem={(item) => (
            <List.Item>
              <p>{item}</p>
            </List.Item>
          )}
        ></List>
      </Card>
    </>
  );
};

export default TaskItem;
