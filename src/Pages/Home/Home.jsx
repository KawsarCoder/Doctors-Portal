import React from "react";
import AppointmentCard from "./AppointmentCard/AppointmentCard";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import ServiceCards from "./ServiceCard/ServiceCards";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <ServiceCards />
      <AppointmentCard />
      <Testimonial />
    </div>
  );
};

export default Home;
