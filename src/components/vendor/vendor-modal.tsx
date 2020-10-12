import { Form, Input, Modal, Radio } from "antd";

import React, { FC } from "react";
import { ActiveStatus, InactiveStatus } from "../common/status";
import { connect } from "react-redux";
import { IVendor } from "../../store/vendor/types";
import NotificationModal from "../common/notification-modal";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedVendor?: IVendor;
  isNew: boolean;
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
}) => {
  if (!selectedVendor) {
    return (
      <NotificationModal
        visible={visible}
        setVisible={setVisible}
        status={"error"}
        title="Please choose one row on table"
      />
    );
  }

  return (
    <Modal
      title={isNew ? "New Vendor" : "Update Vendor"}
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <Form
        {...layout}
        name="nest-messages"
        initialValues={{
          status: selectedVendor.status,
          name: selectedVendor.name,
        }}
      >
        <Form.Item name="id" label="ID">
          <span className="ant-form-text">{selectedVendor.id}</span>
        </Form.Item>

        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input onChange={(e) => (selectedVendor.name = e.target.value)} />
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Radio.Group
            onChange={(e) => (selectedVendor.status = e.target.value)}
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

export default connect(mapStateToProps, null)(VendorModal);
