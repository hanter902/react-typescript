import { Button, Result } from "antd";
import Modal from "antd/lib/modal/Modal";
import { ResultStatusType } from "antd/lib/result";
import React, { FC } from "react";

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  status: ResultStatusType;
  title: string;
};

const NotificationModal: FC<Props> = ({ visible, setVisible, status, title }) => (
  <Modal
    title="Announcement"
    centered
    visible={visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
    footer={[
      <Button type="primary" key="back" onClick={() => setVisible(false)}>
        Back
      </Button>
    ]}
  >
    <Result
      status={status}
      title={title}
    />
  </Modal>
);


export default NotificationModal;
