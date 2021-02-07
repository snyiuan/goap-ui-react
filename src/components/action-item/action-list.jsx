import { List } from "antd";
import ActionItem from "./action-item";
import { connect } from "react-redux";

const ActionList = (props) => {
  return (
    <div className="actions-list">
      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        size="small"
        bordered
        dataSource={props.actions}
        renderItem={(action, index) => (
          <List.Item>
            <ActionItem action={action} index={index}></ActionItem>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default connect(
  (state) => ({
    actions: state.models.actions,
  }),
  {}
)(ActionList);
