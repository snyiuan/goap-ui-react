import { Card, Checkbox, List } from "antd";
import { connect } from "react-redux";

const ResultItem = (props) => {
  return (
    <Card title={props.index + " " + props.result[0]}>
      <List
        dataSource={Array.from(props.result[1])}
        renderItem={(item) => (
          <List.Item>
            <Checkbox checked={item[1]}>{item[0]}</Checkbox>
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default connect((state) => ({
  results: state.models.results,
}))(ResultItem);
