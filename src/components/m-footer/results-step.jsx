import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import ResultItem from "./result-item";

const ResultsStep = (props) => {
  return (
    <List
      grid={{
        gutter: 10,
      }}
      dataSource={props.results}
      renderItem={(result, index) => (
        <List.Item>
          <ResultItem result={result} index={index + 1}></ResultItem>
        </List.Item>
      )}
    ></List>
  );
};

export default connect((state) => ({ results: state.models.results }))(
  ResultsStep
);
