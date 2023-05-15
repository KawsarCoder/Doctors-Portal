import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigation } from "react-day-picker";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckOutForm/CheckoutForm";
import Loading from "../../../Components/Shared/Loading/Loading";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  const { treatment, price, appointmentDate, slot } = booking;

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong className="text-orange-400">${price} </strong> for
        your appointment on {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
