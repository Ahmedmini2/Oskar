/* eslint-disable no-unused-vars */
import React from "react";
import NewsHeaderimage from "../../assets/images/NewsHeader.jpg";
export const NewsHeader = () => {
  return (
    <section className="lg:px-0 px-2">
      <img src={NewsHeaderimage} className="w-full" />
      <div className="text-center md:max-w-xl max-w-lg mx-auto py-6 text-[#828282]">
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence. <br />
          <br />I should be incapable of drawing a single stroke at the present
          moment; and yet I feel that I never was a greater artist than now.
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes.
        </p>
      </div>
    </section>
  );
};
