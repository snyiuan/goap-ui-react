import { Row, Col, Button, Dropdown, Menu, List } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  addPostCondition,
  removePostCondition,
  changePostChecked,
} from "../../redux/actions/actions";
import Checkbox from "antd/lib/checkbox/Checkbox";

const postConditions = (props) => {
  const handleAdd = (actionIndex, targetIndex) => {
    props.dispatch(addPostCondition(actionIndex, targetIndex));
  };

  const handleChecked = (actionIndex, targetIndex, e) => {
    props.dispatch(
      changePostChecked(actionIndex, targetIndex, e.target.checked)
    );
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

  const handleRemovepost = (actionIndex, targetIndex) => {
    props.dispatch(removePostCondition(actionIndex, targetIndex));
  };

  return (
    <>
      <Row justify="space-between">
        <Col>postConditions</Col>
        <Dropdown overlay={menu}>
          <Button
            type="link"
            size="small"
            icon={<PlusCircleOutlined />}
          ></Button>
        </Dropdown>
      </Row>
      <List
        dataSource={props.actions[props.index].postConditions}
        renderItem={(item, index) => (
          <Row justify="space-between">
            <Checkbox
              checked={item.checked}
              onChange={(e) => handleChecked(props.index, index, e)}
            >
              {props.conditions[item.index].name}
            </Checkbox>
            <Button
              type="link"
              size="small"
              onClick={() => handleRemovepost(props.index, index)}
              icon={<MinusCircleOutlined />}
            ></Button>
          </Row>
        )}
      ></List>
    </>
  );
};

export default connect((state) => ({
  actions: state.actions,
  conditions: state.conditions,
}))(postConditions);
