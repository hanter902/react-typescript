import React from 'react';
import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const ActiveStatus = () => (
    <Tag icon={<CheckCircleOutlined />} color="success">active</Tag>
)

const InactiveStatus = () => (
    <Tag icon={<MinusCircleOutlined />} color="error">inactive</Tag>
)

export { ActiveStatus, InactiveStatus }