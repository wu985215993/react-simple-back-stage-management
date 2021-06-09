import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShopcartApi, changeNumApi } from "../apis/shopcart";
export default function Shopcart() {
  const { list } = useSelector((state) => {
    return { list: state.shopcart.list };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const data = await getShopcartApi();
    dispatch({
      type: "setData",
      payload: data,
    });
  }
  async function changeNum(_id, n) {
    await changeNumApi({ _id, n });
    //更新数据
    getData();
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
