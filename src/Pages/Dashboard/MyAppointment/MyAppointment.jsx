import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctor-portal-server-alpha-mauve.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(bookings);
  return (
    <div>
      <h3 className="text-3xl mb-5">My Appoinments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr className="hover" key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary text-white btn-sm">
                          Pay
                        </button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="font-bold text-green-500"> Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
