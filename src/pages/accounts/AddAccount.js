import React, { Component } from "react";
import { Form, Input, Button, notification, Select } from "antd";
import { addOrEditAccountApi } from "../../apis/users";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const tailLayout2 = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};
export default class AddAccount extends Component {
  onFinish = async (values) => {
    // console.log("Success:", values);
    try {
      const result = await addOrEditAccountApi(values);
      notification.success({ message: `添加账号${result.account}成功` });
      /* 重置表单，低啊用表单实例对象上面的resetFields 这个方法 
         获取Form表单的组件实例ref（获取节点 和组件实例）
      */
      this.formInstance.resetFields(["account", "password", "userGroup"]);
    } catch (err) {
      notification.error({ message: err.data.msg });
    }
  };
  // onFinishFailed = (errorInfo) => {
  //   // console.log("Failed:", errorInfo);
  // };
  // handleChange(value) {
  //   // console.log(`selected ${value}`);
  // }
  render() {
    return (
      <>
        <Button style={{ color: "#595959", marginBottom: 20 }}>添加帐号</Button>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
          ref={(instance) => (this.formInstance = instance)}
        >
          <Form.Item
            label="账户名"
            name="account"
            rules={[
              {
                required: true,
                message: "请输入账户名!",
              },
            ]}
          >
            <Input placeholder="请输入帐号" />
          </Form.Item>

          <Form.Item
            label="初始密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password
              placeholder="请输入密码"
              autoComplete="new-password" //禁用浏览器的默认表单的行为
            />
          </Form.Item>

          <Form.Item
            {...tailLayout2}
            name="userGroup"
            label="角色"
            rules={[
              {
                required: true,
                message: "请选择角色!",
              },
            ]}
          >
            <Select style={{ width: 120 }} placeholder="请选择角色">
              <Option value="超级管理员">超级管理员</Option>
              <Option value="普通管理员">普通管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
