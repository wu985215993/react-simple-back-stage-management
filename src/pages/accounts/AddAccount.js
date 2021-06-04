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
    try{
        const result = await addOrEditAccountApi(values);
      notification.success({ message: `添加账号${result.account}成功` });

    }catch(err){
        notification.error({ message: err.data.msg });
    }
    
  };
  onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  handleChange(value) {
    // console.log(`selected ${value}`);
  }
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item
            {...tailLayout2}
            name="userGroup"
            valuePropName="selected"
            label="角色"
            rules={[
              {
                required: true,
                message: "请选择角色!",
              },
            ]}
          >
            <Select style={{ width: 120 }} onChange={this.handleChange}>
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
