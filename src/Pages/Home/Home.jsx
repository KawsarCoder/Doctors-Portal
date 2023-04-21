import React from "react";
import AppointmentCard from "./AppointmentCard/AppointmentCard";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import ServiceCards from "./ServiceCard/ServiceCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <ServiceCards />
      <AppointmentCard />
    </div>
  );
};

export default Home;
