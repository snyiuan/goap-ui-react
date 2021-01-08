import { Button, Card } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import store from "../../redux/store";

const ActionItem = (props) => {
  const handleRemove = () => {
    console.log("handleRemove");
  };

  return (
    <Card
      title={props.action.name}
      extra={
        <Button
          icon={<MinusCircleOutlined />}
          type="link"
          size="small"
          onClick={handleRemove}
        ></Button>
      }
    >
      Card content-:
      {store.getState().conditions.conditions[0]}
    </Card>
  );
};

export default ActionItem;
