import { Row, Col, Button, Dropdown, Menu, List } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  addPreCondition,
  changePreChecked,
  removePreCondition,
} from "../../redux/actions/actions";
import Checkbox from "antd/lib/checkbox/Checkbox";

const PreConditions = (props) => {
  const handleAdd = (actionIndex, targetIndex) => {
    props.dispatch(addPreCondition(actionIndex, targetIndex));
    console.log("handleAdd");
  };
  const handleChecked = (actionIndex, targetIndex, e) => {
    props.dispatch(
      changePreChecked(actionIndex, targetIndex, e.target.checked)
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

  const handleRemovePre = (actionIndex, targetIndex) => {
    props.dispatch(removePreCondition(actionIndex, targetIndex));
  };

  return (
    <>
      <Row justify="space-between">
        <Col>PreConditions</Col>
        <Dropdown overlay={menu}>
          <Button
            type="link"
            size="small"
            icon={<PlusCircleOutlined />}
          ></Button>
        </Dropdown>
      </Row>
      <List
        dataSource={props.actions[props.index].preConditions}
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
              onClick={() => handleRemovePre(props.index, index)}
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
}))(PreConditions);
