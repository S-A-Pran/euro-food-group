import React from "react";
import { Card, Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contacts = () => {
    // used botstrap card and flex box for showing
  return (
    <>
      <NavBar></NavBar>
      <Container id="contacts">
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-primary fw-bold my-5"
        >
          Contact Us
        </h2>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around">
          <img
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="img-fluid w-50 rounded"
            src="https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
            alt=""
          />
          <div className="text-secondary ps-lg-3 pt-2">
            <Card
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              bg="info"
              text="light"
              style={{ width: "18rem" }}
              className="mb-2 shadow-lg"
            >
              <Card.Header>Euro Foods Group</Card.Header>
              <Card.Body>
                <Card.Title> Head Office </Card.Title>
                <Card.Text>
                  Unit E <br />
                  Langland Way Reevesland Park Industrial Estate Newport, Gwent,
                  NP19 4PT <br />
                  <b>Telephone:</b> +01633636000 <br />
                  <b>E-mail:</b> info@eurofoods.co.uk
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              bg="info"
              text="light"
              style={{ width: "18rem" }}
              className="mb-2 shadow-lg"
            >
              <Card.Header>Eurasia Food Processing (BD) Ltd</Card.Header>
              <Card.Body>
                <Card.Title> Bangladesh Office </Card.Title>
                <Card.Text>
                  Gouripur, Ashulia, Savar, Dhaka <br />
                  <b>Telephone:</b> +8801715770840 <br />
                  <b>E-mail:</b> info@eurofoods-bd.com
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Contacts;
