import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import ServiceCards from "./ServiceCard/ServiceCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <ServiceCards />
    </div>
  );
};

export default Home;
