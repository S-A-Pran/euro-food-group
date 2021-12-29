import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Card = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          xs={4}
        >
          <div className="p-4 text-center hover shadow-lg rounded bg-info">
            <img
              className="logos rounded-circle"
              height="300px"
              src="https://image.freepik.com/free-photo/two-shrimps-white-background_1205-99.jpg?1"
              alt=""
            />
            <h4 className="text-center">Process food Service</h4>
          </div>
        </Col>
        <Col
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          xs={4}
        >
          <div className="p-4 text-center hover shadow-lg rounded bg-warning">
            <img
              className="logos rounded-circle"
              height="300px"
              src="https://image.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg"
              alt=""
            />
            <h4 className="text-center">Food Delivery</h4>
          </div>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          xs={4}
        >
          <div className="p-4 text-center hover shadow-lg rounded bg-danger">
            <img
              className="logos rounded-circle"
              height="250px"
              src="https://image.freepik.com/free-vector/clothes-rail-neon-sign_1262-20732.jpg"
              alt=""
            />
            <h4 className="text-center">Fashion</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
