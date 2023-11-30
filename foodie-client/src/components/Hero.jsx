import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import banner from "/banner.png";
import bannerFood2 from "/b-food2.png";
import bannerFood3 from "/b-food3.png";

const Hero = () => {
  return (
    <section className="section-container hero">
      <div className="flex items-center justify-between flex-col md:flex-row-reverse gap-8 py-32">
        {/* left section */}
        <div className="md:w-1/2">
          <img src={banner} alt="hero-banner" />

          {/* Hero image tags */}
          <div className="flex items-center flex-col md:flex-row justify-around gap-4 -mt-20">
            <div className="flex items-center gap-2 bg-white px-3 py-2 shadow-lg w-44 rounded-2xl">
              <img src={bannerFood2} alt="" />
              <div>
                <h5 className="text-xs font-bold text-coral">Special fries</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="md:flex items-center gap-2 bg-white px-3 py-2 shadow-lg w-44 hidden rounded-2xl">
              <img src={bannerFood3} alt="" />
              <div>
                <h5 className="text-xs font-bold text-coral">Italian Pizza</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold">
            Best Food <br /> Which Makes Your{" "}
            <span className="text-coral">Hungry</span>
          </h2>
          <p className="text-textSmooth text-md">
            Exploring the world of cuisine is like embarking on a flavorful
            adventure. Testy foods add a thrilling twist, turning every bite
            into a delightful journey for the taste buds.
          </p>
          <button className="flex items-center justify-center bg-coral hover:bg-lightCoral text-white px-8 py-3 rounded-full font-semibold btn">
            Order Now <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
