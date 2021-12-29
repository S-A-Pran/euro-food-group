import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Career = () => {
  //used flexbox for showing message of carrer and image
  return (
    <>
      <NavBar></NavBar>
      <Container id="career">
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-primary fw-bold my-5"
        >
          Working for Eurofoods
        </h2>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around">
          <img
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="img-fluid w-50 rounded"
            src="https://image.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?1"
            alt=""
          />
          <p
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-secondary ps-lg-3 pt-2"
          >
            Euro Foods Group is an expanding business, with a passion for good
            quality, exotic foods. With 1500 employees worldwide and over 2000
            customers to keep us busy, the environment, whatever your specialty,
            is fast paced and lively. Each opportunity offers a unique working
            experience across the UK. For the latest opportunities, keep
            checking our job notifications or sign up to our newsletter.
          </p>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Career;
