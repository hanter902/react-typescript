import { Button, Form, Input, InputNumber, Modal, Radio, Select } from "antd";

import React, { FC, useState } from "react";

const { Option } = Select;

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const VendorManagerModal: FC<Props> = ({ visible, setVisible }) => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  }

  return (
    <Modal
      title="New Vendor or Update Vendor"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{
          status: 1,
          vendor_Id: 'lucy'
        }}
      >

        <Form.Item name="id" label="Plain Text">
          <span className="ant-form-text">Id here</span>
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{type: 'email'}]}>
          <Input />
        </Form.Item>

        <Form.Item name="fullName" label="Full Name">
          <Input />
        </Form.Item>

        <Form.Item name="team" label="Team">
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Phone">
          <Input/>
        </Form.Item>
        <Form.Item name="status" label="Radio.Group">
          <Radio.Group>
            <Radio value={1}>Active</Radio>
            <Radio value={2}>InActive</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="user_ID" label="User ID">
          <Input/>
        </Form.Item>

        <Form.Item name="vendor_Id" label="Vendor">
          <Select style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item> 
      </Form>
    </Modal>
  );
};

export default VendorManagerModal;
