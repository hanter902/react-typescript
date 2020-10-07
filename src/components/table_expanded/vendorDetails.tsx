import React from 'react';
import {Table} from 'antd';

  const columns = [
    {
      title: 'Name (all screens)',
      dataIndex: 'name',
      key: 'name',
    //   render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Age (medium screen or bigger)',
      dataIndex: 'age',
      key: 'age',
    //   responsive: ['md'],
    },
    {
      title: 'Address (large screen or bigger)',
      dataIndex: 'address',
      key: 'address',
    //   responsive: ['lg'],
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
  ];

const Vendor = () => {

    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
      }

      
    return(
          <Table
             columns={columns}
            pagination={false}
    // expandable={{
    //   expandedRowRender: () => renderExpanedTable(),
    //   rowExpandable: record => record.name !== 'Not Expandable',
    // }}
            dataSource={data}
  />
    )
}

export default Vendor;