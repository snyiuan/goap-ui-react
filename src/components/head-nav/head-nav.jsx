import React, { useState } from "react";
import { Button, Space, Modal, Input, message } from "antd";
import { TASK, ACTION } from "./target-type";
import { connect } from "react-redux";
import { addAction, addTask } from "../../redux/actions/actions";
import store from "../../redux/store";

const HeadNav = ({ dispatch }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputName, setInputName] = useState("");
  const [addType, setAddType] = useState("");

  const handleOk = () => {
    if (inputName) {
      if (addType === TASK) {
        console.log("taskkkk");
        dispatch(addTask(inputName));
      } else {
        console.log("actionnnn");
        dispatch(addAction(inputName));
      }
    } else {
      message.info(addType + " can not be null");
    }
    setIsVisible(false);
    setInputName("");
  };
  const handleCancel = () => {
    setIsVisible(false);
    setInputName("");
  };
  const handleInput = (e) => {
    setInputName(e.target.value);
  };

  const handleClick = (type) => {
    setIsVisible(true);
    switch (type) {
      case TASK:
        setAddType(TASK);
        break;
      case ACTION:
        setAddType(ACTION);
        break;
      default:
        console.log("no match");
    }
  };

  const handleGenerator = () => {
    console.log(store);
    console.log("handleGenerator");
  };
  return (
    <>
      <Space>
        <Button type="primary" shape="round" onClick={() => handleClick(TASK)}>
          Add Tasks
        </Button>
        <Button
          type="primary"
          shape="round"
          onClick={() => handleClick(ACTION)}
        >
          Add Actions
        </Button>
        <Button type="primary" shape="round" onClick={handleGenerator}>
          Generator
        </Button>
      </Space>
      <Modal
        title={"Please enter " + addType + " name"}
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input type="text" onChange={handleInput} value={inputName}></Input>
      </Modal>
    </>
  );
};

export default connect()(HeadNav);
