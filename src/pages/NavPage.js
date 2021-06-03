import React, { Component } from "react";
import { Layout, } from "antd";
import MyHeader from "../components/MyHeader";
import MySider from "../components/MySider";
import MyContent from "../components/MyContent";

export default class NavPage extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        {/* 头部 */}
        <MyHeader />
        <Layout>
          {/* 左侧菜单栏 */}
          <MySider />
          {/* 右侧内容区 */}
          <MyContent />
        </Layout>
      </Layout>
    );
  }
}
