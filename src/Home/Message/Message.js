import React from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Message = () => {
    //used flexbox for showing both image and message
  return (
    <Container>
      <h2
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-primary fw-bold my-5"
      >
        Message of Chairman
      </h2>
      <div className="d-flex flex-column align-items-center justify-content-around">
        <img
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="img-fluid w-75 rounded"
          src="https://i2-prod.walesonline.co.uk/incoming/article21028960.ece/ALTERNATES/s810/1_rbp_mai070721hussain9682JPG.jpg"
          alt=""
        />
        <p
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-secondary ps-lg-3 pt-2"
        >
          Euro Foods Group is a leading international manufacturer and
          distributor of frozen and fresh foods, serving the restaurant,
          catering and specialist supermarket sectors. Our business is founded
          on two key values: a clear focus on customer service and the provision
          of quality produce.We were founded in 1991 and have grown to become
          the UK's largest supplier to the Asian food market, with a passion for
          high quality seafood, meat, poultry, vegetables and desserts.
          Employing over 1,500 people worldwide and working closely with our
          network of partner suppliers, we produce a number of brands well known
          in the industry including Zoy, Rohim and Crown Farms. Euro Foods also
          supplies a large number of Chinese, Thai and Indonesian catering
          businesses in the UK and Europe. We also supply direct to the public
          via our Masala Bazaar chain of specialist retail outlets. Mission
          Statement By listening to our customers and tailoring our business to
          suit, we aim to pro-actively exceed their expectations now and in the
          future. We lead the industry with innovation in products and services
          to ensure ongoing, loyal customer relationships based around a genuine
          understanding of their needs. Our colleagues Without our staff, our
          company would not exist. Our colleagues and partners around the world
          have the right to expect safe working conditions, respectful treatment
          and appropriate rewards for their work. We are fortunate to employ
          driven, skilled teams, who we consider the eyes and ears of our
          business and are encouraged to report any issues to any of our senior
          managers for immediate action. Likewise we encourage colleagues to
          make suggestions on how to improve our business; if any idea leads to
          cost savings then the colleague will be rewarded for their suggestion.
          Our goods and services We are proud to deliver products that are of a
          high standard and always safe for consumption. We can provide all
          necessary information to show due diligence for all the goods and
          services we supply, and we rigorously ensure that all will be labelled
          correctly. Our external customers The customer is the most important
          person in our business family. Good customer service is an essential
          aspect of our business, on every level, and we ensure that we deliver
          what we have agreed at the appropriate time. Our dealings with our
          customers are professional at all times. If a customer has an issue
          with our goods or service they will be treated courteously and kept
          informed as the issue is investigated and resolved. Our suppliers
          Equally important to us as our customers, our suppliers are treated as
          our business partners, with honesty and dignity. We strive to build
          long term relationships with our suppliers, to deliver products and
          services to our customers which meet our own high standards. Our
          marketing Our marketing materials and campaigns will always be
          accurate, to help our customers make informed decisions and better use
          of our goods and services. <br /> <br /> Together – let us grow
          fruitfully, <br /> Shelim Hussain
        </p>
      </div>
    </Container>
  );
};

export default Message;
