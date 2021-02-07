import React, { useState } from "react";
import { Input, Button, Popconfirm, Modal } from "antd";
import { connect } from "react-redux";
import { MinusCircleOutlined, SettingOutlined } from "@ant-design/icons";
import {
  changeCondition,
  removeCondition,
  renameCondition,
} from "../../redux/actions/actions";

const ConditionItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [changeName, setChangeName] = useState("");

  const showModal = () => {
    setChangeName(props.condition.name);
    setIsModalVisible(true);
  };
  const handleChangeName = (event) => {
    setChangeName(event.target.value);
  };
  const handleOk = () => {
    props.dispatch(renameCondition(props.index, changeName));
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const hanldeRemove = () => {
    props.dispatch(removeCondition(props.index));
  };

  const onChange = (e) => {
    props.dispatch(changeCondition(props.index, e.target.value));
  };

  return (
    <div>
      <Input
        onChange={onChange}
        value={props.condition.name}
        disabled
        addonAfter={
          <>
            <Popconfirm
              title="Are you sure to remove this condition?"
              onConfirm={hanldeRemove}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="link"
                size="small"
                icon={<MinusCircleOutlined />}
              ></Button>
            </Popconfirm>
            <Button
              onClick={showModal}
              type="link"
              size="small"
              icon={<SettingOutlined />}
            ></Button>
          </>
        }
      ></Input>
      <Modal
        title="Change condition"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={changeName} onChange={handleChangeName} />
      </Modal>
      <div>
        {props.condition.repeated ? (
          <p style={{ color: "red" }}>Conditions are repeated</p>
        ) : null}
      </div>
    </div>
  );
};

export default connect((state) => ({
  conditions: state.models.conditions,
}))(ConditionItem);
