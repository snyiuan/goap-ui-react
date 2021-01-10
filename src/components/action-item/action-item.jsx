import { Button, Card, Input, Popconfirm } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import PreConditions from "./preconditions";
import PostConditions from "./postcondition";
import { connect } from "react-redux";
import {
  changeCost,
  changeActionName,
  removeAction,
} from "../../redux/actions/actions";

const ActionItem = (props) => {
  const handleRemoveAction = () => {
    props.dispatch(removeAction(props.index));
  };

  const handleChangeCost = (e) => {
    props.dispatch(changeCost(props.index, e.target.value));
  };

  const handleChangename = (e) => {
    props.dispatch(changeActionName(props.index, e.target.value));
  };
  return (
    <Card
      title={props.action.name}
      extra={
        <Popconfirm
          title="Are you sure to remove this action?"
          onConfirm={handleRemoveAction}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<MinusCircleOutlined />}
            type="link"
            size="small"
          ></Button>
        </Popconfirm>
      }
    >
      <Input
        addonBefore="Name:"
        value={props.action.name}
        onChange={handleChangename}
      ></Input>
      <Input
        addonBefore="Const:"
        value={props.action.cost}
        onChange={handleChangeCost}
        type="number"
      ></Input>
      <PreConditions action={props.action} index={props.index}></PreConditions>
      <PostConditions
        action={props.action}
        index={props.index}
      ></PostConditions>
    </Card>
  );
};

export default connect((state) => ({
  actions: state.actions,
}))(ActionItem);
