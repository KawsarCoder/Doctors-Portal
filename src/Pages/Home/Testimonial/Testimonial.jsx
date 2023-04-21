import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Winson Herry",
      country: "California",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Leniya Brathy",
      country: "Amerika",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Marry henry",
      country: "United States",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h5 className="text-primary text-xl font-bold">Testimonial</h5>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>

        <div>
          <img
            className="w-[150px] md:w-[192px]"
            src={quote}
            alt="Qoute-icon"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewsData.map((reviews) => (
          <Reviews key={reviews.id} reviews={reviews} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
