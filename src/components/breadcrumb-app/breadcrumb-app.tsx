import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbApp = () => {
    return(
        <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Vendor</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
      </Breadcrumb>
    )
}

export default BreadcrumbApp;