import { Button, message, Popconfirm, Row, Space, Table, Tag } from 'antd';
import React, { Fragment, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, ExportOutlined, FileExcelOutlined, FileOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';
import VendorModal from './vendor-modal';


const data = [
    {
        key: 1,
        "id": "AmbientModel",
        "name": "AmbientModel",
        "status": "ACTIVE",
        "createdAt": "Wed Jun 17 2020 02:56:52 GMT+0000 (UTC)"
    },
    {
        key: 2,
        "id": "test.01",
        "name": "test.InfinityWar",
        "status": "INACTIVE",
        "createdAt": "Mon Sep 07 2020 08:46:16 GMT+0000 (UTC)",
    },
    {
        key: 3,
        "id": "Welstory",
        "name": "Welstory",
        "status": "ACTIVE",
        "createdAt": "Wed Oct 03 2018 02:11:35 GMT+0000 (UTC)",
    }
]


const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text: any) => <span>{text}</span>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a: any, b: any) =>  a.name.localeCompare(b.name),
        multiple: 2,
      },
      render: (text: any) => <span>{text}</span>,
      // responsive: ['lg'] as Breakpoint[],
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
      title: 'createdAt',
      dataIndex: 'createdAt',
      responsive: ['lg'] as Breakpoint[],
      render: (text: any) => <span>{text}</span>
    //   sorter: {
    //     compare: (a: any, b: any) => a.createdAt - b.createdAt,
    //     multiple: 1,
    //   },
    },
  ];


const VendorList = () => {

    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
      }

    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        // getCheckboxProps: (record: any) => ({
        //     disabled: record.name === 'Disabled User',
        //     // Column configuration not to be checked
        //     name: record.name,
        // })
    };

    const onChangeRadio = (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

    const confirm = () => {
        // message.config({
        //     top: 100,
        //     duration: 2,
        //     maxCount: 3,
        //     rtl: true,
        //     prefixCls: 'my-message',
        //   });
        message.info('Clicked on Yes.');
    }

    const [visible, setVisible] = useState(false);

    // const onShowModalClick = (value: boolean) => {
    //     setVisible(value);
    // }

    return(
        <Fragment>
            <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} 
            // rowSelection={{type: 'radio', ...rowSelection}}
            rowSelection={{type: 'radio', onChange: onChangeRadio }}
             />
            {/* <div style={{position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', padding: '10px', backgroundColor: '#e6f7ff'}}>
                <Space>

                    <Button type="primary"  loading>Loading</Button>
                    <Button type="primary"  icon={<PlusOutlined />} onClick={() => setVisible(true)}>New</Button>
                    <Button type="primary"  icon={<EditOutlined />}>Update</Button>

                    <Popconfirm placement="top" title={'Are you sure to delete this record'} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button type="primary"  icon={<DeleteOutlined />}>Delete</Button>
                    </Popconfirm>

                    <Button type="primary"  icon={<FileOutlined />}>Import</Button>
                    <Button type="primary"  icon={<FileExcelOutlined />}>Export</Button>
                    <Button type="primary"  icon={<ExportOutlined />}>Logout</Button>

                </Space>
                <VendorModal visible={visible} setVisible={setVisible}/>
            </div> */}
        </Fragment>
        
    )
}

export default VendorList;
