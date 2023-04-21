import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";
import "../AppointmentCard/Appointment.css";

const ContactForm = () => {
  return (
    <section id="appointmentBg">
      <div className="text-center pt-16">
        <h5 className="text-lg font-bold text-secondary">Contact Us</h5>
        <h2 className="text-3xl text-white mt-3">Stay connected with us</h2>
      </div>
      <div className="hero">
        <div className="hero-content w-[450px]">
          <div className="card flex-shrink-0 w-[100%]">
            <div className="card-body">
              <div className="">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered  w-full"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered  w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <PrimaryBtn className="">Submit</PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
