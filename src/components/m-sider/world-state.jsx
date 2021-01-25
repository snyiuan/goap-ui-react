import React from "react";
import { Button, Card, List, Row } from "antd";
import { connect } from "react-redux";
import ConditionsDropdown from "../conditinos-dropdown/conditions-dropdown";
import Checkbox from "antd/lib/checkbox/Checkbox";
import {
  addWorldState,
  changeWorldState,
  removeWorldState,
} from "../../redux/actions/actions";
import { MinusCircleOutlined } from "@ant-design/icons";

const WorldState = (props) => {
  const handleAdd = (index) => {
    props.dispatch(addWorldState(index));
  };
  const handleChangeCheck = (index, e) => {
    props.dispatch(changeWorldState(index, e.target.checked));
  };
  const handleRemoveState = (index) => {
    props.dispatch(removeWorldState(index));
  };
  return (
    <div>
      <Card
        title="World state"
        extra={<ConditionsDropdown slot="extra" handleAdd={handleAdd} />}
      >
        <List
          dataSource={props.worldStates}
          renderItem={(condition, index) => (
            <Row justify="space-between">
              <Checkbox
                onChange={(e) => handleChangeCheck(index, e)}
                checked={condition.checked}
                style={{ color: condition.checked ? "green" : "red" }}
              >
                {props.conditions[condition.index].name}
              </Checkbox>
              <Button
                type="link"
                icon={<MinusCircleOutlined />}
                size="small"
                onClick={() => handleRemoveState(index)}
              ></Button>
            </Row>
          )}
        ></List>
      </Card>
    </div>
  );
};

export default connect((state) => ({
  worldStates: state.models.worldStates,
  conditions: state.models.conditions,
}))(WorldState);
