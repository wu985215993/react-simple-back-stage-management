import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button, notification, Popconfirm } from "antd";

import { handleDeleteApi } from "../../apis/users";

export default function AccountsListFunctional() {
  const history = useHistory();
  
  // const [data, setData] = useState([]);
  const {data} = useSelector(({users}) => {
    return {
        ...users,
    }
  })

  const [columns, setColumns] = useState([
    {
      title: "账户名",
      dataIndex: "account",
      key: "account",
      width: 100,
    },
    {
      title: "角色",
      dataIndex: "userGroup",
      key: "userGroup",
      width: 100,
    },
    {
      title: "创建时间",
      dataIndex: "createDate",
      key: "createDate",
      width: 200,
    },
    {
      title: "操作",
      key: "options",
      dataIndex: "options",
      width: 200,
      render: (text, record) => (
        <Popconfirm
          title="您确定要删除吗?"
          onConfirm={() => confirm(record._id)} //点击确认的回调
          onCancel={cancel} //点击取消的回调
        >
          <Button type="primary">删除</Button>
        </Popconfirm>
      ),
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    // getUserList();
    dispatch({
      type: "watchGetUserList"
    })
  }, []);
  /* async function handleDelete(id) {
    try {
      const result = await handleDeleteApi(id);
      dispatch({
        type: "watchGetUserList"
      })
      notification.success({ message: `删除账号${result.account}成功` });
    } catch (err) {
      notification.error({ message: "删除账号失败" });
    }
  } */
  /* async function getUserList() {
    const newResult = await getAccountListApi();
    setData(
      newResult.data.map((item) => {
        item.key = item.account;
        return item;
      })
    );
  } */
  //确认删除
  async function confirm(id) {
    dispatch({
      type: "watchDelete",
      payload: id,
    })
    
    // notification.success({ message: `删除账号${result.account}成功` });
  }
  //取消删除
  function cancel() {}

  function toAddAccount() {
    history.push("/nav/addAccount");
  }

  return (
    <>
      <Button
        style={{ color: "#595959", marginBottom: 20 }}
        onClick={toAddAccount}
      >
        添加帐号
      </Button>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 5 }}
      />
    </>
  );
}
