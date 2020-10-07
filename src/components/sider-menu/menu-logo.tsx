import React from "react";
import { Row, Image, Col, Typography } from "antd";
import AppLogo from "../../assets/images/8day-logo.png";
import './menu-logo.css';

const { Title, Paragraph } = Typography;

const MenuLogo = () => {
  return (
    <div className="logo">
      <Row>
        <Col xs={24} md={24} lg={6}>
          <Image src={AppLogo} style={{ marginTop: "10px" }} />
        </Col>
        <Col>
          <Title level={3} style={{ color: "white" }}>
            Hello!
          </Title>
          <Paragraph ellipsis style={{ color: "white" }}>
            sna8days@gmail.com
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};
export default MenuLogo;
