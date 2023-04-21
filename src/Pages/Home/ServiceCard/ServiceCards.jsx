import React from "react";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import ServiceCard from "./ServiceCard";
import treatment from "../../../assets/images/treatment.png";

const ServiceCards = () => {
  const serviceData = [
    {
      id: 1,
      image: fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      image: cavity,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      image: whitening,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div>
      <div className="text-center mt-32">
        <h5 className="text-xl font-bold text-secondary">OUR SERVICES</h5>
        <h2 className="text-3xl text-accent mt-3">Services We Provide</h2>
      </div>
      <div className="grid mt-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="card card-side grid lg:grid-cols-2 mx-auto h-[400px] my-[170px]">
        <figure>
          <img
            src={treatment}
            className="lg:w-2/3 rounded-lg"
            alt="treatment-img"
          />
        </figure>
        <div className="card-body lg:w-[72%]">
          <h2 className="card-title text-4xl text-accent">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions">
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
