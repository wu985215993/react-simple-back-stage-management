import React, { Component } from "react";
import { Form, Input, Button, notification } from "antd";
import  {loginApi}  from "../apis/users";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

export default class Login extends Component {
  onFinish = async (values) => {
    // console.log("Success:", values);
    try  {

      const { token, userInfo } = await loginApi(values);
      //登录成功 1.把token和 userInfo存到本地存储 2.跳转路由
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.props.history.push("/nav");
      notification.success({ message: "登录成功" });
    } catch (err){
      //提示错误
      notification.error({ message: err.data.msg });
    }
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="login">
        <Form
          {...layout}
          style={{ width: 400 }}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label={<div style={{ color: "#fff" }}>用户名</div>}
            name="account" //表单字段名
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label={<div style={{ color: "#fff" }}>密码</div>}
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
