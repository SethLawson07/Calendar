import React from "react";
import { Col, Row } from "react-bootstrap";

function CustomHr(props) {
  return (
    <Row className="my-2">
      <Col xs={12}>
        <div
          style={{
            width: props.width,
            height: props.height,
            backgroundColor: props.color || "black",
            margin: "0 auto",
            float: "left"
          }}
        />
      </Col>
    </Row>
  );
}

export default CustomHr;
