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


const TopMenuAction = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <VendorModal visible={visible} setVisible={setVisible} />

      <Menu mode="horizontal">
        <Menu.Item
          key="new"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
        >
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
    </Fragment>
  );
};

export default TopMenuAction;
