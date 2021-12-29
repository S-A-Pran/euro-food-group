import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  //   imported fontawesome icon
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const insta = <FontAwesomeIcon icon={faInstagram} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;

  //function for subscribe btn
  const messageBtn = (e) => {
    e.target.reset();
    setTimeout(() => {
      alert("Thank you for subscription");
    }, 2000);
  };

  return (
    <div className="bg-dark mt-5">
      <Container className="d-flex flex-column justify-content-around flex-lg-row text-light pt-3">
        <div className="text-center">
          {/* explore more options */}
          <h4 className="pb-2">Explore More</h4>
          <NavHashLink
            className="text-decoration-none text-light active"
            to="/home#home"
          >
            <h6>Home</h6>
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none text-light active"
            to="/about#about"
          >
            <h6>About Us</h6>
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none text-light active"
            to="/services#services"
          >
            <h6>Services</h6>
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none text-light active"
            to="/career#career"
          >
            <h6>Career</h6>
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none text-light active"
            to="/contacts#contacts"
          >
            <h6>Contacts</h6>
          </NavHashLink>
        </div>

        <div>
          {/* more of us logos */}
          <h4 className="text-center">More of Us</h4>
          <div className="d-flex flex-column text-center flex-lg-row">
            <div>
              <img
                className="img-fluid p-1 ms-1 bg-light rounded-pill logos"
                src="https://cdn.asp.events/CLIENT_Dubai_Wo_4B15F265_5056_B739_54F3125D47F0BC95/companyProfiles/0C41AFC-1F6F-4A66-A86C-9A0D71980745-logo.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid p-1 bg-light rounded-pill logos"
                src="https://efgfashion.com/wp-content/uploads/2021/09/efg_Logo.png"
                alt=""
              />
              <div className="w-25 d-inline">
                <img
                  className="img-fluid ms-1 p-1 bg-light rounded-pill logos"
                  src="https://www.kukd.com/static/img/kukd_logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="d-flex mt-1 flex-column text-center flex-lg-row">
            <div>
              <img
                className="img-fluid p-1 bg-light rounded-pill logos"
                src="https://www.masalabazaar.com.bd/wp-content/uploads/2021/09/MB_Grocery23.svg"
                alt=""
              />
              <img
                className="img-fluid p-1 ms-1 bg-light rounded-pill logos"
                src="https://rosemcofoods.com/wp-content/uploads/2021/05/Rosemco-LOGO.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          {/* subscribe us btn */}
          <h4 className="text-center">Subscribe Us</h4>
          <form onSubmit={messageBtn}>
            <div className="input-group pt-3">
              <span className="input-group-text" id="basic-addon2">
                {email}
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                aria-label="Useremail"
                aria-describedby="basic-addon2"
                required
              />
            </div>
            <input
              className="btn btn-primary mt-1 w-100"
              type="submit"
              value="Subscribe"
            />
          </form>

          <div>
            <h5 className="py-2">Follow us</h5>
            <div className="d-flex justify-content-around ">
              <span className="bg-light fs-4 px-2 text-dark rounded-circle">
                {facebook}
              </span>
              <span className="bg-light  fs-4 px-2 text-dark rounded-circle">
                {insta}
              </span>
              <span className="bg-light  fs-4 px-2 text-dark rounded-circle">
                {twitter}
              </span>
              <span className="bg-light  fs-4 px-2 text-dark rounded-circle">
                {linkedin}
              </span>
            </div>
          </div>
        </div>
      </Container>
      <hr className="text-light mx-5" />
      <h6 className="text-center text-light pt-2 pb-4 mb-0">
        copyright &copy; sabbiralam294 2022
      </h6>
    </div>
  );
};

export default Footer;
