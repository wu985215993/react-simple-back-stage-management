import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";

const { Header } = Layout;
class MyHeader extends Component {
  clickMenuItem = (params) => {
    const { key } = params;
    switch (key) {
      case "/nav/userCenter":
        this.props.history.push("/nav/userCenter");
        break;
      case "logout":
        this.props.history.push("/nav/userCenter");
        break;
      default:
    }
  };
  render() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return (
      <>
        <Header
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 30, fontStyle: "italic" }}>蜗牛商城</span>
            <span style={{ marginLeft: 40, marginRight: 40 }}>
              欢迎您： xxx
            </span>
            <img
              style={{ width: 40, height: 40, borderRadius: 40 }}
              src={`http://jacklv.cn/images/${userInfo.imgUrl}`}
              alt={'Avatar'}
            />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/nav/userCenter"]}
            onClick={this.clickMenuItem}
            style={{width: 192}}
          >
            <Menu.Item key="/nav/userCenter">个人中心</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}
export default withRouter(MyHeader);
