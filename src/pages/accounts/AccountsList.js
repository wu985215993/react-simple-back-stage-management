import React, { Component } from "react";

import { Table, Button, notification, Popconfirm } from "antd";

import { getAccountListApi, handleDeleteApi } from "../../apis/users";

export default class AccountsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
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
              onConfirm={() => this.confirm(record._id)}//点击确认的回调
              onCancel={this.cancel}//点击取消的回调
            >
              <Button
                type="primary"
              >
                删除
              </Button>
            </Popconfirm>
          ),
        },
      ],
      data: []
    };
  }
  handleDelete = async (id) => {
    try {
      const result = await handleDeleteApi(id);
      this.getUserList();
      notification.success({ message: `删除账号${result.account}成功` });
    } catch (err) {
      notification.error({ message: "删除账号失败" });
    }
  };
  getUserList = async () => {
    const newResult = await getAccountListApi();
    this.setState({
      data: newResult.data.map((item) => {
        item.key = item.account;
        return item;
      }),
    })
  }
  //确认删除
  confirm = async (id) => {
    const result = await handleDeleteApi(id);
    //删除成功更新数据
    this.getUserList();
    notification.success({ message: `删除账号${result.account}成功` });
  }
  //取消删除
  cancel = () => {

  }
  async componentDidMount() {
    this.getUserList();
  }
  toAddAccount = () => {
    this.props.history.push("/nav/addAccount");
  };
  render() {
    // console.log("render");
    const { columns, data } = this.state;
    return (
      <>
        <Button
          style={{ color: "#595959", marginBottom: 20 }}
          onClick={this.toAddAccount}
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
}
