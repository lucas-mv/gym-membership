import { Breadcrumb, Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import ZouRouter from "./ZouRouter";

function App() {
  return (
    <div className="App">
      <Layout className="layout max-height">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>

        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {ZouRouter()}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
