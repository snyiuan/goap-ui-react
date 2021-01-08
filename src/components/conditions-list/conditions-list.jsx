import React, { useState } from "react";
// import React from "react";
import ConditionItem from "../condition-item/condition-item";
import { connect } from "react-redux";
import { Row, Col, Button, List, Input, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./conditions.css";
import store from "../../redux/store";
import { addCondition } from "../../redux/actions/actions";

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
    store.dispatch(addCondition(inputName));
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
            <ConditionItem condition={item} index={index}>
              {item}
            </ConditionItem>
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

// const Conditions = (props) => {
//   return (
//     <>
//       <ul>
//         {props.conditions.map((condition, index) => (
//           <ConditionItem condition={condition} key={index}></ConditionItem>
//         ))}
//       </ul>
//     </>
//   );
// };

export default connect((state) => ({
  conditions: state.conditions.conditions,
}))(Conditions);

// export default class Conditions extends Component {
//   render() {
//     return <div>Conditions</div>;
//   }
// }

/* class Conditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  setIsModalVisible(val) {
    this.setState({
      isModalVisible: val,
    });
  }
  showModal = () => {
    this.setIsModalVisible(true);
  };
  handleOk = () => {
    this.setIsModalVisible(false);
  };
  handleCancel = () => {
    this.setIsModalVisible(false);
  };
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col>CONDITIONS</Col>
          <Button
            onClick={this.showModal}
            icon={PlusCircleOutlined}
            size="small"
            type="link"
            shape="circle"
          ></Button>
        </Row>
        <List
          size="small"
          data-source={this.props.conditions}
          item-layout="vertical"
        >
          renderItem=
          {(item, index) => (
            <List.Item>
              <ConditionItem
                condition={item}
                // conditions={conditions}
              />
            </List.Item>
          )}
        </List>

        <Modal
          title="Please enter message"
          visible={this.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input type="text" aria-placeholder="Please enter condition" />
        </Modal>
      </div>
    );
  }
} */
