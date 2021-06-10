import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Shopcart() {
  const { list } = useSelector((state) => {
    return { list: state.shopcart.list };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // getData();
    //使用saga
    dispatch({
      type: "watchGetData",
    });
  }, []);
  //逻辑放到saga里面管理
  // async function getData() {
  //   const data = await getShopcartApi();
  //   dispatch({
  //     type: "setData",
  //     payload: data,
  //   });
  // }
  function changeNum(_id, n) {
    // await changeNumApi({ _id, n });
    dispatch({
      type: "watchChangeNum",
      payload: { _id, n },
    });
    //更新数据
    // getData();
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => changeNum(item._id, -1)}>-</button>
                  {item.num}
                  <button onClick={() => changeNum(item._id, 1)}>+</button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button>删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
