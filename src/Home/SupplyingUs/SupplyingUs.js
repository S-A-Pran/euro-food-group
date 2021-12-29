import React from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SupplyingUs = () => {
  return (
    //   used flex to show both
    <Container>
      <h2
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-primary fw-bold my-5"
      >
        Supplying us
      </h2>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around">
        <img
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="img-fluid w-75 rounded"
          src="https://i2-prod.walesonline.co.uk/incoming/article21043781.ece/ALTERNATES/s615b/0_3059550JPG.jpg"
          alt=""
        />
        <div>
          <h4
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-dark fw-bold ps-lg-3 pt-2"
          >
            Meeting Our Standards
          </h4>
          <p
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-secondary ps-lg-3 pt-2"
          >
            Euro Foods imports a huge variety of produce into the UK and as
            such, we carry full liability for food safety, quality and
            labelling. All our suppliers comply with our high standards and
            controls, to ensure we fulfil these regulations correctly. We aim to
            ensure all our suppliers meet BRC (British Retail Consortium)
            standards as a minimum. When products arrive at our depots, we have
            in-house standards to guarantee the products make the grade. For
            every product we sell, we must have a product specification; this
            provides a contract between us and our suppliers, confirming exactly
            what is being made and what we are buying. A sample will be checked
            against the specification for each delivery we receive. We even cook
            the foods too, to make sure they taste good! We work closely with
            our suppliers to ensure the food authorities in the UK are happy
            with the foods we import. By keeping control of our supply chain, we
            ensure only the best quality produce reaches our customers.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SupplyingUs;
