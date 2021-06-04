import React, { Component } from "react";
//引入路由核心组件
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
      <React.Suspense fallback={<div>加载中...</div>}>
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/login"></Redirect>
            <Route
              path="/login"
              component={React.lazy(() => import(/* webpackChunkName: 'login' */"./pages/Login.js"))}
            ></Route>
            <Route
              path="/nav"
              component={React.lazy(() => import(/* webpackChunkName: 'nav' */"./pages/NavPage.js"))}
            ></Route>
          </Switch>
        </HashRouter>
      </React.Suspense>
      </ConfigProvider>
    );
  }
}
