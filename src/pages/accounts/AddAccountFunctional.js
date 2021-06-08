import React, { useRef } from "react";
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

export default function AddAccountFunctional() {
  const formRef = useRef(null);
  async function onFinish(values)  {
    try {
      const result = await addOrEditAccountApi(values);
      notification.success({ message: `添加账号${result.account}成功` });
      // this.formInstance.resetFields(["account", "password", "userGroup"]);
      formRef.current.resetFields(["account", "password", "userGroup"]);
    } catch (err) {
      console.log(err);
      notification.error({ message: err.data.msg });
    }
  }
  return (
    <>
      <Button style={{ color: "#595959", marginBottom: 20 }}>添加帐号</Button>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
        // ref={(instance) => (this.formInstance = instance)}
        ref={formRef}
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
