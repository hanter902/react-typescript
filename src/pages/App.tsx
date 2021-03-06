import React, { FC, Fragment, useState } from "react";
import { Layout } from "antd";
import "./App.css";
import SiderMenu from "../components/sider-menu/sider-menu";
import TopMenuAction from "../components/top-menu-action/top-menu-action";
import BreadcrumbApp from "../components/breadcrumb-app/breadcrumb-app";
import FooterApp from "../components/footer-app/footer-app";
import VendorList from '../components/vendor/vendor-list';
import VendorManager from "../components/vendor/vendor-manager";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const [visible, setVisible] = useState(false);

  return (
 
    <BrowserRouter>
    <Switch>
    <Fragment>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        breakpoint="lg"
        theme="dark"
      >
        <SiderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, margin: 0 }}>
          <TopMenuAction />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <BreadcrumbApp />
          

          {/** router for features include form, table, ... */}
            <Route path="/vendor-list" component={VendorList} />
            <Route path="/vendor-manager" component={VendorManager} />

          
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <FooterApp />
        </Footer>
      </Layout>
    </Layout>
    </Fragment>
    </Switch>
    </BrowserRouter>

  );
};

export default App;
