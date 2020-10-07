import React from "react";
import { Menu } from "antd";
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
  MailOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const MenuList = () => {
  return (
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
  );
};

export default MenuList;
