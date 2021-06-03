import React, { Component } from "react";

import { Table, Button, notification } from "antd";

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
            <Button
              type="primary"
              onClick={this.handleDelete.bind(this, record._id)}
            >
              删除
            </Button>
          ),
        },
      ],
      data: [],
    };
  }
  async handleDelete(id) {
    try {
      const result = await handleDeleteApi(id);
      const newResult = await getAccountListApi();
      this.setState({
        data: newResult.data.map((item) => {
          item.key = item.account;
          return item;
        }),
      });
      notification.success({ message: "删除账号成功" });
    } catch (err) {
      notification.error({ message: "删除账号失败" });
    }
  }
  async componentDidMount() {
    const result = await getAccountListApi();
    this.setState(
      {
        data: result.data.map((item) => {
          item.key = item.account;
          return item;
        }),
      },
      () => {}
    );
  }
  toAddAccount = () => {
    this.props.history.push("/nav/addAccount");
  };
  render() {
    console.log("render");
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
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 5 }}
        />
      </>
    );
  }
}
