import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero">
      <div
        className="hero-content flex-col lg:flex-row-reverse"
        id="mainBanner"
      >
        <img
          src={chair}
          className="rounded-lg lg:w-1/2 shadow-2xl  mt-[100px]"
          alt="main-banner"
        />
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-accent md:leading-[70px] lg:w-[90%]">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 text-accent">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
