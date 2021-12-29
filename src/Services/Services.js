import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css"

AOS.init();

// created data for company
const services = [
  {
    title: "Rosemco Foods Limited",
    img: "https://rosemcofoods.com/wp-content/uploads/2021/05/img-1024x369.jpg",
    address: "Niklpur, Rupsha, Khulna",
    link: "https://rosemcofoods.com/",
  },
  {
    title: "saidowal (pvt.) enterprise ltd",
    img: "https://www.eurofoods-bd.com/images/logo.png",
    address: "WesKhhali, Sunamganj, Sylhet",
    link: "https://www.bangladeshyp.com/company/23671/Saidowla_Pvt_Enterprise_Ltd",
  },
  {
    title: "EFG Fashion",
    img: "https://efgfashion.com/wp-content/uploads/2021/09/efg_Logo.png",
    address: "WesKhhali, Sunamganj, Sylhet",
    link: "https://efgfashion.com/",
  },
  {
    title: "Horizon Seafood Ltd",
    img: "https://lirp.cdn-website.com/0aed969f/dms3rep/multi/opt/Logo_1-384w.png",
    address: "36 East Nasirabad, Bayzid Bostami Road, Chittagong",
    link: "https://www.eurofoods-bd.com/index.html",
  },
  {
    title: "Masala Bazaar",
    img: "https://www.masalabazaar.com.bd/wp-content/uploads/2021/09/MB_Grocery23.svg",
    address: "Uttara, Dhaka",
    link: "https://www.masalabazaar.com.bd/",
  },
  {
    title: "Masala Shirmps Limited",
    img: "https://image.freepik.com/free-photo/fresh-shrimp-prawn_1339-2185.jpg",
    address: "Uttara, Dhaka",
    link: "https://www.eurofoods-bd.com/index.html",
  },
];

const Services = () => {
  // font awesome icon
  const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
  return (
    <>
      <NavBar></NavBar>
      <Container id="services">
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-primary fw-bold my-5"
        >
          More of Us
        </h2>
        <Row className="g-4">
          {/* mapped datas for showing one by one */}
          {services.map((service) => (
            <Col
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              sm={12}
              lg={4}
              key={service.title}
            >
              <Card className="text-center services">
                <Card.Img className="bg-light" height={"300px"} variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.address}</Card.Text>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold"
                    variant="primary"
                    href={service.link}
                  >
                    Visit {arrow}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Services;
