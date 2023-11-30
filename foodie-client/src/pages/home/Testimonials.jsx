import React from "react";
import chef from "/images/home/testimonial/chef.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left section */}
        <div className="md:w-1/2 hidden md:flex">
          <img src={chef} alt="chef" />
        </div>
        {/* Right section */}
        <div className="w-full md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>

            <blockquote className="my-5 text-textSmooth leading-[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>

            {/* Customer Profile Avatar */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">Customer Feedback</h1>
                <div className="flex items-center text-textSmooth text-sm">
                  <FaStar className="text-yellow-400" size={13} />{" "}
                  <span className="text-sm mx-[6px]">4.9</span> (19.9k Reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
