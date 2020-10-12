import React, { FC, Fragment } from "react";
import { useLocation } from "react-router-dom";
import VendorManagerModal from "../vendor/vendor-manager-modal";
import VendorModal from "../vendor/vendor-modal";

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  isNew: boolean;
};

const TopMenuModal: FC<Props> = ({ visible, setVisible, isNew }) => {
  const location = useLocation();

  const handleCurrentFeature = () => {
    const feature =
      location.pathname.split("/").length > 1
        ? location.pathname.split("/")[1]
        : null;

    switch (feature) {
      case "vendor-list":
        return (
          <VendorModal
            visible={visible}
            setVisible={setVisible}
            isNew={isNew}
          />
        );
      case "vendor-manager":
        return <VendorManagerModal visible={visible} setVisible={setVisible} />;
      default:
        break;
    }
  };

  return <Fragment>{visible && handleCurrentFeature()}</Fragment>;
};

export default TopMenuModal;
