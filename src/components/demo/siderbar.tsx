import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Image,
  Row,
  Col,
  Typography,
  Space,
  Button,
  Popconfirm,
  Divider,
} from "antd";
import {
  TeamOutlined,
  GroupOutlined,
  OneToOneOutlined,
  CoffeeOutlined,
  UnorderedListOutlined,
  MobileOutlined,
  MenuOutlined,
  ProfileOutlined,
  QrcodeOutlined,
  NotificationOutlined,
  AppstoreOutlined,
  MessageOutlined,
  MailOutlined,
  BankOutlined,
  EditOutlined,
  DeleteOutlined,
  FileOutlined,
  FileExcelOutlined,
  ExportOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import AppLogo from "../../assets/images/8day-logo.png";
import VendorList from "../vendor/vendor-list";
import "./siderbar.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Paragraph } = Typography;

const SiderbarDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        breakpoint="lg"
        theme="dark"
      >
        <div className="logo">
          <Row>
            <Col xs={24} md={24} lg={6}>
              <Image src={AppLogo} style={{ marginTop: "10px" }} />
            </Col>
            <Col>
              <Title level={3} style={{ color: "white" }}>
                Hello!
              </Title>
              <Paragraph ellipsis style={{ color: "white" }}>
                sna8days@gmail.com
              </Paragraph>
            </Col>
          </Row>
        </div>
        <Menu
          theme="dark"
          defaultOpenKeys={["sub1"]}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<OneToOneOutlined />} title="Vendor">
            <Menu.Item key="1">List</Menu.Item>
            <Menu.Item key="2">Manager</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<GroupOutlined />} title="Factory">
            <Menu.Item key="3">List</Menu.Item>
            <Menu.Item key="4">Manager</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<TeamOutlined />} title="Employee">
            <Menu.Item key="5">List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<CoffeeOutlined />} title="Canteen">
            <Menu.Item key="6">List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<UnorderedListOutlined />} title="Menu">
            <Menu.Item key="7">Canteen List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<MobileOutlined />} title="Device">
            <Menu.Item key="8">List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" icon={<MenuOutlined />} title="Sale">
            <Menu.Item key="9">Factory List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub8" icon={<ProfileOutlined />} title="Settlement">
            <Menu.Item key="10">Factory List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub9" icon={<BankOutlined />} title="Pre-paid">
            <Menu.Item key="11">QRCode Generation</Menu.Item>
            <Menu.Item key="12">Factory List</Menu.Item>
            <Menu.Item key="13">Sale</Menu.Item>
            <Menu.Item key="14">Charge & Refund</Menu.Item>
          </SubMenu>
          <SubMenu key="sub10" icon={<MailOutlined />} title="Notice">
            <Menu.Item key="15">Notification List</Menu.Item>
            <Menu.Item key="16">Notify Registration</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub11"
            icon={<NotificationOutlined />}
            title="Push Notification"
          >
            <Menu.Item key="17">Delivery List</Menu.Item>
            <Menu.Item key="18">Push Registration</Menu.Item>
          </SubMenu>
          <SubMenu key="sub12" icon={<QrcodeOutlined />} title="QR Code">
            <Menu.Item key="19">QRCode Generation</Menu.Item>
            <Menu.Item key="20">QRCode List</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{ padding: 0, margin: 0 }}
        >
          <Menu mode="horizontal">
            <Menu.Item key="new" icon={<PlusOutlined />}>
              New
            </Menu.Item>
            <Menu.Item key="update" icon={<EditOutlined />}>
              Update
            </Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />}>
              Delete
            </Menu.Item>
            <Menu.Item key="import" icon={<FileOutlined />}>
              Import
            </Menu.Item>
            <Menu.Item key="export" icon={<FileExcelOutlined />}>
              Export
            </Menu.Item>
            <Menu.Item
              key="logout"
              icon={<ExportOutlined />}
              style={{ float: "right" }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div> */}

          {/* <Button type="primary" block icon={<PlusOutlined />}>New XX</Button> */}
          <VendorList />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SiderbarDemo;
