import React from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Aboutus = () => {
  //showed both about info and image using flexbox
  return (
    <Container>
      <h2
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-primary fw-bold my-5"
        id="about"
      >
        Proud Story
      </h2>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around">
        <img
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="img-fluid rounded"
          src="https://www.eurofoods-bd.com/images/depot-400x494.png"
          alt=""
        />
        <p
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-secondary ps-lg-3 pt-2"
        >
          With an initial investment of £20, Euro Foods Group founder, Shelim
          Hussain MBE began his adventure into the frozen foods industry.
          Established in 1991, the company began the journey by supplying the
          Indian restaurants and takeaways in Wales and the West Country. With
          hard work and determination the business then developed rapidly, and
          the supply chain became national. The story has many successful
          chapters, Euro Foods started with frozen, fresh and ambient food
          distribution – as demand grew, Euro Foods progressed their services
          into manufacturing and established the following in Bangladesh: <br />{" "}
          - Eurasia Food Processing (BD) Ltd. in Dhaka <br /> - Rosemco Foods
          Ltd. in Khulna <br /> - Saidowla Pvt. Enterprise Ltd. in Sunamganj
          Euro Foods has become a leading international manufacturer and
          distributor of frozen and fresh foods, serving the restaurant,
          catering and specialist supermarket sectors.
        </p>
      </div>
    </Container>
  );
};

export default Aboutus;
