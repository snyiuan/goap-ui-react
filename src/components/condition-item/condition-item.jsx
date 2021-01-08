import React, { useState } from "react";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { MinusCircleOutlined } from "@ant-design/icons";
import { changeCondition } from "../../redux/actions/actions";
import store from "../../redux/store";

// import { Component } from "react";

// export default class ConditionItem extends Component {
//   render() {
//     return <div>conditionItem</div>;
//   }
// }

const ConditionItem = (props) => {
  // const [conditionName,setConditionName] = useState('')

  const hanldeRemove = () => {
    console.log("hanldeRemove");
  };

  // const test = (e) => {
  //   console.log("test", e);
  // };

  const onChange = (e) => {
    props.dispatch(changeCondition(props.index, e.target.value));
  };

  return (
    <Input
      onChange={onChange}
      value={props.condition}
      addonAfter={
        <Button
          type="link"
          size="small"
          onClick={hanldeRemove}
          icon={<MinusCircleOutlined />}
        ></Button>
      }
    ></Input>
  );
};

export default connect()(ConditionItem);

// export default ConditionItem = (props) => {
//   return <li>conditionItem--{props.condition}</li>;
// };
