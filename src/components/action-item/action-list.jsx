import { List } from "antd";
import ActionItem from "./action-item";
import { connect } from "react-redux";

const ActionList = (props) => {
  return (
    <div className="actions-list">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        split
        size="small"
        header={<div>head</div>}
        bordered
        dataSource={props.actions}
        renderItem={(action) => (
          <List.Item>
            <ActionItem
              action={action}
              conditions={props.conditions}
            ></ActionItem>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default connect(
  (state) => ({
    conditions: state.conditions,
    actions: state.actions,
  }),
  {}
)(ActionList);
