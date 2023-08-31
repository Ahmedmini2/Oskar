/* eslint-disable no-unused-vars */
import React from "react";
export const GalleryMasonry = () => {
  return (
    <section className=" md:w-2xl max-w-6xl lg:px-10 grid md:grid-cols-3 md:mx-20 sm:mx-5 mx-5 gap-4">
      <div className="md:col-span-2 ">
        <div className="grid gap-4 mb-5">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="mb-4 text-xl font-bold font-heebo uppercase tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
          Oskar Phone
        </h1>

        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-base sm:text-sm lg:text-base dark:text-gray-400">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence.
          <br></br>
          <br></br>I should be incapable of drawing a single stroke at the
          present moment; and yet I feel that I never was a greater artist than
          now. When, while the lovely valley teems with vapour around me, and
          the meridian sun strikes. A wonderful serenity has taken possession of
          my entire soul, like these sweet mornings of spring which I enjoy with
          my whole heart. I am alone, and feel the charm of existence in this
          spot, which was created for the bliss of souls like mine.
        </p>
      </div>

      <div className="md:col-span-1 xs:col-span-1">
        <h1 className="mb-4 text-xl font-bold font-heebo uppercase tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
          Oskar Phone
        </h1>

        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-base sm:text-sm lg:text-base dark:text-gray-400">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence.
          <br></br>
          <br></br>I should be incapable of drawing a single stroke at the
          present moment; and yet I feel that I never was a greater artist than
          now. When, while the lovely valley teems with vapour around me, and
          the meridian sun strikes. A wonderful serenity has taken possession of
          my entire soul, like these sweet mornings of spring which I enjoy with
          my whole heart. I am alone, and feel the charm of existence in this
          spot, which was created for the bliss of souls like mine.
        </p>
      </div>
      <div className="md:col-span-2 xs:col-span-1">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
