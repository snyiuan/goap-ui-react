import React from "react";
import { Input, Button, Popconfirm } from "antd";
import { connect } from "react-redux";
import { MinusCircleOutlined } from "@ant-design/icons";
import { changeCondition, removeCondition } from "../../redux/actions/actions";

const ConditionItem = (props) => {
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
        addonAfter={
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
        }
      ></Input>
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
