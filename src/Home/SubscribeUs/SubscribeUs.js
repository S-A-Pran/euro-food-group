import {
  faComments,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SubscribeUs = () => {
  //icon imported and useRef hook for getting data from field
  const form = useRef();
  const user = <FontAwesomeIcon icon={faUser} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const comments = <FontAwesomeIcon icon={faComments} />;

  //send button function to email
  const messageBtn = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        process.env.TEMPLATE,
        form.current,
        process.env.USER
      )
      .then(
        (result) => {
          if (result.text) {
            alert("Thank you for your response.");
          }
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
      //emailing form
    <div>
      <Container>
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          id="contact"
          className="fw-bold text-primary py-5"
        >
          Get in touch
        </h2>
        <Row className="text-light d-flex justify-content-center align-items-center">
          <Col xs={12} lg={5}>
            <img
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="img-fluid"
              src="https://image.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} lg={7}>
            <form
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              ref={form}
              onSubmit={messageBtn}
            >
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  {user}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="input-group mb-3">
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
              <div className="input-group">
                <span className="input-group-text">{comments}</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>

              <input
                className="btn btn-primary mb-5 mt-3 w-100"
                type="submit"
                value="Send"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubscribeUs;
