import React, { FC } from "react";
import { Layout } from "antd";
import MenuLogo from './menu-logo';
import MenuList from './menu-list';
const { Sider } = Layout;

type Props = {
  collapsed: boolean,
  setCollapsed: (collapsed: boolean) => void
}

const SiderMenu: FC<Props> = ({collapsed, setCollapsed}) => {
  
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      breakpoint="lg"
      theme="dark"
    >
        <MenuLogo/>
        <MenuList/>
    </Sider>
  );
};

export default SiderMenu;
