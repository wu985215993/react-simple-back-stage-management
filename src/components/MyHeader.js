import React, { Component } from "react";
import { Layout, Menu,Modal } from "antd";
import { withRouter } from "react-router-dom";

const { Header } = Layout;
class MyHeader extends Component {
  state = {
    isModalVisible:false
  }
  clickMenuItem = (params) => {
    const { key } = params;
    switch (key) {
      case "/nav/userCenter":
        this.props.history.push("/nav/userCenter");
        break;
      case "logout":
        this.setState({isModalVisible:true});
        // this.props.history.push("/nav/userCenter");
        break;
      default:
    }
  };
  handleOk = () => {
    //清空本地存储
    localStorage.clear();
    //跳转到登录
    this.props.history.push('/login')
    // this.setState({isModalVisible:false});
  };

  handleCancel = () => {
    this.setState({isModalVisible:false});

  };
  render() {
    const {isModalVisible} = this.state;
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
              alt={"Avatar"}
            />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/nav/userCenter"]}
            onClick={this.clickMenuItem}
            style={{ width: 192 }}
          >
            <Menu.Item key="/nav/userCenter">个人中心</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
          </Menu>
        </Header>
        <Modal
            title="提示"
            visible={isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            您确定要退出登录吗
          </Modal>
      </>
    );
  }
}
export default withRouter(MyHeader);
