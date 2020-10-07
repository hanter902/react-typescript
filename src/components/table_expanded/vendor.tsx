import React from 'react';
import {Table} from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age',  
        sorter: {
        compare: (a: any, b: any) => a.age - b.age,
        multiple: 3,
      } 
    },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ]; 




  const columns1 = [
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
  
  const data1 = [
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

      
    const renderExpanedTable = () => <Table style={{marginLeft: '20px'}} columns={columns1} dataSource={data1} onChange={onChange} pagination={false} />

    return(
          <Table
    columns={columns}
    pagination={false}
    expandable={{
      expandedRowRender: () => renderExpanedTable(),
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
    )
}

export default Vendor;