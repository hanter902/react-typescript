import { Button, Form, Input, Modal, Radio } from "antd";

import React, { FC, useState } from "react";
import { ActiveStatus, InactiveStatus } from "../common/status";
import { connect } from "react-redux";
import { IVendor } from "../../store/vendor/types";
import NotificationModal from "../common/notification-modal";
import { newVendor, updateVendor } from "../../store/vendor/actions";


type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedVendor?: IVendor;
  isNew: boolean;
  updateVendor: (vendor: IVendor) => void;
  newVendor: (vendor: IVendor) => void;
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const VendorModal: FC<Props> = ({
  visible,
  setVisible,
  selectedVendor,
  isNew,
  updateVendor,
  newVendor
}) => {
  const [success, setSuccess] = useState(false);
  if ((!selectedVendor && !isNew) || (!selectedVendor && success)) {
    return (
      <NotificationModal
        visible={visible}
        setVisible={setVisible}
        status={success? "success" : "error"}
        title={success? isNew? "You added new vendor" : "You updated this vendor" : "Please choose one row on table"}
      />
    );
  }

  let {ID, name, status, address, createdAt, updatedAt} = selectedVendor as IVendor || {};

  const onClickOk = () => {
    const vendor: IVendor = {ID, name, status, address, createdAt, updatedAt}

    if(isNew){
      newVendor(vendor);
    }
    else{
      updateVendor(vendor);
    }
    setSuccess(true);
  }

  return (
    <Modal
      title={isNew ? "New Vendor" : "Update Vendor"}
      centered
      visible={visible}
      onOk={() => onClickOk()}
      onCancel={() => setVisible(false)}
    >
      <Form
        {...layout}
        initialValues={{
          status: status || 'ACTIVE',
          name: name,
        }}
      >
        <Form.Item name="id" label="ID">
          {isNew? <Input onChange={(e) => (ID = e.target.value)} />: <span className="ant-form-text">{ID}</span>}
        </Form.Item>

        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input onChange={(e) => (name = e.target.value)} />
        </Form.Item>

        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input onChange={(e) => (address = e.target.value)} />
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Radio.Group
            onChange={(e) => (status = e.target.value)}
          >
            <Radio value="ACTIVE">
              <ActiveStatus />
            </Radio>
            <Radio value="INACTIVE">
              <InactiveStatus />
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  selectedVendor: state.vendors.selectedVendor,
});

const mapDispatchToProps = {
  updateVendor: updateVendor,
  newVendor: newVendor
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorModal);
