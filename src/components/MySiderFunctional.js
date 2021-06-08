import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withRouter,useHistory,useLocation } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;
export default function MySiderFunctional(props) {
  const history = useHistory();
  const location = useLocation();
  function clickMenuItem(params) {
    const [path, subMenuKey] = params.keyPath;
    if (subMenuKey) {
      localStorage.setItem("subMenuKey", subMenuKey);
    } else {
      localStorage.removeItem("subMenuKey");
    }
    // props.history.push(path);
    history.push(path);
  };
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline" // 菜单类型 谁知水平和内嵌三种模式
          // defaultSelectedKeys={[props.location.pathname]} // 初选中菜单项的key数组
          defaultSelectedKeys={[location.pathname]} // 初选中菜单项的key数组
          defaultOpenKeys={[localStorage.getItem("subMenuKey")]} // 初始展开的SubMenu数组
          style={{ height: "100%", borderRight: 0 }}
          onClick={clickMenuItem}
        >
          <Menu.Item key="/nav/home">首页</Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="账号管理">
            <Menu.Item key="/nav/accountList">账号列表</Menu.Item>
            <Menu.Item key="/nav/addAccount">添加帐号</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="店铺管理">
            <Menu.Item key="/nav/shopsList">店铺列表</Menu.Item>
            <Menu.Item key="/nav/addShop">添加店铺</Menu.Item>
          </SubMenu>
          <Menu.Item key="/nav/functionalComponent">函数组件</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
// export default withRouter(MySiderFunctional)