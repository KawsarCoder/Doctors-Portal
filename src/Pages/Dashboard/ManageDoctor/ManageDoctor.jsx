import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Components/Shared/Loading/Loading";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const closeModal = () => {
    setDeleteDoctor(null);
  };

  // get doctor info
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctor-portal-server-alpha-mauve.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(
      `https://doctor-portal-server-alpha-mauve.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <h3 className="text-4xl m-5"> Manage Doctor</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr className="hover" key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error text-white hover:bg-rose-500"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deleteDoctor.name}, it can't redo.`}
          successAction={handleDeleteDoctor}
          modalData={deleteDoctor}
          successBtnName="Delete"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ManageDoctor;
