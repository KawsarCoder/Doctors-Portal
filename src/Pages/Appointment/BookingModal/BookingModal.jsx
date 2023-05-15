import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      price,
      slot,
      email,
      phone,
    };

    fetch("https://doctor-portal-server-alpha-mauve.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option>Select a slot</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              required
              placeholder="Your name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="Email address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              required
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full mx-w-xs"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
