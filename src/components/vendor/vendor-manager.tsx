import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';
import React from 'react';

const data = [
    {
        // key: 1,
      "ID": "hspark33@gmail.com_Welstory",
      "email": "hspark33@gmail.com",
      "fullName": "Eunice",
      "team": "UIUX",
      "phone": null,
      "status": "ACTIVE",
      "user_ID": "hspark33@gmail.com",
      "vendor_ID": "Welstory",
    },
    {
        // key: 2,
      "ID": "ntngan.kta@gmail.com_Welstory",
      "email": "ntngan.kta@gmail.com",
      "fullName": "Ngân",
      "team": "GA ",
      "phone": null,
      "status": "ACTIVE",
      "user_ID": "ntngan.kta@gmail.com",
      "vendor_ID": "Welstory",
    },
    {
        // key: 3,
      "ID": "phuthaobg@gmail.com_Welstory",
      "email": "phuthaobg@gmail.com",
      "fullName": "Thao ",
      "team": "8DAYS",
      "phone": null,
      "status": "ACTIVE",
      "user_ID": "phuthaobg@gmail.com",
      "vendor_ID": "Welstory",
    },
    {
        // key: 4,
      "ID": "v10z.vn@samsung.com_Welstory",
      "email": "v10z.vn@samsung.com",
      "fullName": "Nguyen Thi Hoa",
      "team": "Welstory",
      "phone": null,
      "status": "ACTIVE",
      "user_ID": "v10z.vn@samsung.com",
      "vendor_ID": "Welstory",
    },
    {
        // key: 5,
      "ID": "vinhxuan858913@gmail.com_Welstory",
      "email": "vinhxuan858913@gmail.com",
      "fullName": "Vu Thi Xuan",
      "team": "8DAYS",
      "phone": null,
      "status": "ACTIVE",
      "user_ID": "vinhxuan858913@gmail.com",
      "vendor_ID": "Welstory",
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      render: (text: any) => <span>{text}</span>
    },
    {
      title: 'email',
      dataIndex: 'email',
      sorter: {
        compare: (a: any, b: any) =>  a.name.localeCompare(b.name),
        multiple: 2,
      },
      render: (text: any) => <span>{text}</span>,
    },
    {
        title: 'fullName',
        dataIndex: 'fullName',
        sorter: {
          compare: (a: any, b: any) =>  a.name.localeCompare(b.name),
          multiple: 2,
        },
        render: (text: any) => <span>{text}</span>,
      },
      {
        title: 'team',
        dataIndex: 'team',
        sorter: {
          compare: (a: any, b: any) =>  a.name.localeCompare(b.name),
          multiple: 2,
        },
        render: (text: any) => <span>{text}</span>,
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        sorter: {
          compare: (a: any, b: any) =>  a.name.localeCompare(b.name),
          multiple: 2,
        },
        render: (text: any) => <span>{text}</span>,
      },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: {
        compare: (a: any, b: any) => a.status.localeCompare(b.status),
        multiple: 1,
      },
      render: (status: any) => (
        <span >
            {
                status === 'ACTIVE'? <CheckCircleOutlined style={{color: '#52c41a', fontSize: '18px'}} /> :<MinusCircleOutlined style={{color: '#f5222d', fontSize: '18px'}} />
            }           
        </span>
      ),
      responsive: ['lg'] as Breakpoint[],
    },
    {
      title: 'user_ID',
      dataIndex: 'user_ID',
      responsive: ['lg'] as Breakpoint[],
      render: (text: any) => <span>{text}</span>
    },
    {
        title: 'vendor_ID',
        dataIndex: 'vendor_ID',
        responsive: ['lg'] as Breakpoint[],
        render: (text: any) => <span>{text}</span>
      },
  ];


const VendorManager = () => {



    const onChangeRadio = (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

   
    
    return (
        <Table columns={columns} dataSource={data} pagination={false} rowKey="ID"
        rowSelection={{type: 'radio', onChange: onChangeRadio }}
         />
    )
}

export default VendorManager;