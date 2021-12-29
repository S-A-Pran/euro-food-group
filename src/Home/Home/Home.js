import React from "react";
import Card from "../../Card/Card";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Aboutus from "../Aboutus/Aboutus";
import Header from "../Header/Header";
import Message from "../Message/Message";
import SubscribeUs from "../SubscribeUs/SubscribeUs";
import SupplyingUs from "../SupplyingUs/SupplyingUs";

const Home = () => {
  return (
    <>
    {/* added all components */}
      <NavBar></NavBar>
      <Header></Header>
      <Card></Card>
      <Aboutus></Aboutus>
      <Message></Message>
      <SupplyingUs></SupplyingUs>
      <SubscribeUs></SubscribeUs>
      <Footer></Footer>
    </>
  );
};

export default Home;
