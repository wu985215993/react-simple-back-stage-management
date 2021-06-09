/* import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  //从状态机里面把当前组件所需要的状态引入
  const { count } = useSelector((state) => {
    return {
      count: state.count,
    };
  });
  const dispatch = useDispatch();
  function add() {
    dispatch({
      type: "add",
      payload: 2,
    });
  }
  return (
    <div>
      Count {count} <button onClick={add}>点我add</button>
    </div>
  );
}
 */

import React, { Component } from "react";
import { connect } from "react-redux";
class Counter extends Component {
  change = () => {
    this.props.dispatch({
      type: "add",
      payload: 2,
    });
  };
  asyncAdd = () => {
    this.props.dispatch({
      type: "watchAdd",
      payload: 5,
    });
  };

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.asyncAdd}>点我修改</button>
      </div>
    );
  }
}
//作用：把状态机里面的数据取出来，以外部属性的方式给到外部组件
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
export default connect(mapStateToProps)(Counter);
