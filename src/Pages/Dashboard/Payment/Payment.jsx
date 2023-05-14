import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();

  const { treatment, price, appointmentDate, slots } = booking;

  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong className="text-orange-400">{price} </strong> for your
        appointment on {appointmentDate} at {slots}
      </p>
    </div>
  );
};

export default Payment;
