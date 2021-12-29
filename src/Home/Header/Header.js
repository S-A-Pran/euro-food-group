import React from "react";
import { Carousel } from "react-bootstrap";
import efg from "../../Images/efg.PNG";
import kukd from "../../Images/kukd.PNG";
import masala from "../../Images/masalabazar.PNG";
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Header = () => {
  // used bootstrap carousel
  return (
    <div  data-aos="fade-down" className="contain" id="home">
      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 contain-img"
            src={efg}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="bg-warning w-75 text-dark text-center rounded-pill">
              <h4>Our Services</h4>
              <p>EFG Fashion</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 contain-img"
            src={kukd}
            alt="Second slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="bg-warning text-dark w-75 text-center rounded-pill">
              <h4>Our Services</h4>
              <p>Kukd (food service)</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 contain-img"
            src={masala}
            alt="Third slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="bg-warning text-dark w-75 text-center rounded-pill shadow-lg">
              <h4>Our Services</h4>
              <p>Masala Bazaar</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
