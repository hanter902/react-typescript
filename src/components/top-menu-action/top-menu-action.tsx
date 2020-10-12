import React, { FC, Fragment, useState } from "react";
import { Menu } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileOutlined,
  FileExcelOutlined,
  ExportOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import VendorModal from "../vendor/vendor-modal";
import { useLocation } from 'react-router-dom';
import VendorManagerModal from "../vendor/vendor-manager-modal";
import TopMenuModal from "./top-menu-modal";


const TopMenuAction = () => {
  const [visible, setVisible] = useState(false);
  const [isNew, setIsNew] = useState(false);
  // const location = useLocation();

  const onClickShowModal = (isNew: boolean) => {
    setIsNew(isNew);
    setVisible(true);
  }


  // const handleCurrentFeature = () => { 
  //   const feature = location.pathname.split('/').length > 1 ? location.pathname.split('/')[1] : null;
    
  //   switch (feature) {
  //     case 'vendor-list':   
  //       return <VendorModal visible={visible} setVisible={setVisible} isNew={isNew} />
  //     case 'vendor-manager':
  //       return <VendorManagerModal visible={visible} setVisible={setVisible} />    
  //     default:
  //       break;
  //   }
  // }


  return (
    <Fragment>
    {/* {visible && handleCurrentFeature()} */}
    <TopMenuModal visible={visible} isNew={isNew} setVisible={setVisible}/>

      <Menu mode="horizontal">
        <Menu.Item
          key="new"
          icon={<PlusOutlined />}
          onClick={() => onClickShowModal(true)}
        >
          New
        </Menu.Item>
        <Menu.Item key="update" icon={<EditOutlined />} onClick={() => onClickShowModal(false)}>
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
    </Fragment>
  );
};

export default TopMenuAction;