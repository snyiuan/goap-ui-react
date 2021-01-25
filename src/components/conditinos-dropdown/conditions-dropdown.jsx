import { Dropdown, Menu, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { PlusCircleOutlined } from "@ant-design/icons";
import Protypes from "prop-types";

const ConditionsDropdown = (props) => {
  const menu = (
    <Menu>
      {props.conditions.map((condition, index) => (
        <Menu.Item key={index} onClick={() => props.handleAdd(index)}>
          {condition.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button size="small" type="link" icon={<PlusCircleOutlined />}></Button>
    </Dropdown>
  );
};

export default connect((state) => ({
  conditions: state.models.conditions,
}))(ConditionsDropdown);

ConditionsDropdown.prototypes = {
  handleAdd: Protypes.func.isRequired,
};
