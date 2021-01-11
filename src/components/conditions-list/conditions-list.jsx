import React, { useState } from "react";
import ConditionItem from "./condition-item";
import { connect } from "react-redux";
import { Row, Col, Button, List, Input, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { addCondition } from "../../redux/actions/actions";
import "./conditions.css";

const Conditions = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputName, setInputName] = useState("");

  const onChange = (e) => {
    setInputName(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    props.dispatch(addCondition(inputName));
    setIsModalVisible(false);
    setInputName("");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setInputName("");
  };

  return (
    <div className="conditions">
      <List
        size="small"
        header={
          <div>
            <Row justify="space-between">
              <Col>Conditions</Col>
              <Button
                icon={<PlusCircleOutlined />}
                onClick={showModal}
                size="small"
                type="link"
                shape="circle"
              ></Button>
            </Row>
          </div>
        }
        bordered
        dataSource={props.conditions}
        item-layout="horizontal"
        renderItem={(item, index) => (
          <List.Item>
            <ConditionItem condition={item} index={index}></ConditionItem>
          </List.Item>
        )}
      ></List>
      <Modal
        title="Please enter new condition name"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={inputName}
          onChange={onChange}
          aria-placeholder="Please enter condition"
        />
      </Modal>
    </div>
  );
};

export default connect((state) => ({
  conditions: state.models.conditions,
}))(Conditions);
