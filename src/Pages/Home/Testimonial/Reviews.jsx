import React from "react";

const Reviews = ({ reviews }) => {
  const { name, img, review, country } = reviews;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="leading-5">{review}</p>
        <div className="card-actions mt-8">
          <div className="avatar">
            <div className="w-2/3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="-ml-6">
            <h2 className="card-title">{name}</h2>
            <h5>{country}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
