import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;
export default class MyContent extends Component {
  render() {
    return (
      <>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#fff',
              height: '100%'
            }}
          >
            <Switch>
              <Redirect exact from="/nav" to="/nav/home" />
              <Route
                path="/nav/home"
                component={React.lazy(() => import("../pages/Home"))}
              ></Route>
              <Route
                path="/nav/userCenter"
                component={React.lazy(() => import("../pages/UserCenter"))}
              ></Route>
              <Route
                path="/nav/accountList"
                component={React.lazy(() =>
                  import("../pages/accounts/AccountsList")
                )}
              ></Route>
              <Route
                path="/nav/addAccount"
                component={React.lazy(() =>
                  import("../pages/accounts/AddAccount")
                )}
              ></Route>
              <Route
                path="/nav/shopsList"
                component={React.lazy(() =>
                  import("../pages/shops/ShopsList")
                )}
              ></Route>
              <Route
                path="/nav/addShop"
                component={React.lazy(() =>
                  import("../pages/shops/AddShop")
                )}
              ></Route>
            </Switch>
          </Content>
        </Layout>
      </>
    );
  }
}
