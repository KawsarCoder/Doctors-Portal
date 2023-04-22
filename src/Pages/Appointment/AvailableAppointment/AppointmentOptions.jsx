import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";

const AppointmentOptions = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary font-bold text-center ">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
            onClick={() => setTreatment(appointmentOptions)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
