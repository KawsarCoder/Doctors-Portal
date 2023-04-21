import React from "react";
import doctorSmall from "../../../assets/images/doctor-small.png";
import "./Appointment.css";

const AppoinmentCard = () => {
  return (
    <div className="card lg:card-side mt-[170px]" id="appointmentBg">
      <figure className="">
        <img className="md:w-2/3" src={doctorSmall} alt="doctor-img" />
      </figure>
      <div className="card-body text-white md:w-1/2 my-12">
        <h5 className="card-title text-primary">Appointment</h5>
        <h2 className="card-title text-3xl my-3">Make an appointment Today</h2>
        <p style={{ flexGrow: 0 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions mt-3">
          <button className="btn btn-primary text-white">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
