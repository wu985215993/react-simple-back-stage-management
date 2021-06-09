import { createStore } from "redux";
/* 
    redux三大核心概念
        1.store——数据仓库
        2.action——通知对象
        3.reducer——计算规则

        核心概念一： store 数据仓库——存放项目数据的地方，一个项目只有一个store
*/
const store = createStore(reducer);
/* 
    核心概念二：action 通知对象 就是一个普通的JSON对线只是里面必须有个type属性，表示当前通知的类型
    其他属性，可以任意传递，一般是在计算新数据时所需要的参数
*/
store.dispatch({
  type: "changeName",
  payload: "李四",
});

/* 
    核心概念三：reducer 计算着规定了数据修改的规则
    接受两个参数：
        参数一： state 表示store中的数据
        参数二： action 表示接收到的action对线
    该函数的返回值就是新的数据，会覆盖原来的数据
    该函数会在何时会执行？
    1.创建store 通过createStore 创建的时候会执行一次
    2.在dispatch（通过dispatch派发action）的时候会执行
*/
function reducer(state = { name: "张三", sex: "男" }, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "changeName":
      return {
        ...state, //复制老数据
        name: action.payload,
      };
    default:
      return state; //设置默认值
  }
  return state;
}

console.log("store.getState()", store.getState());
