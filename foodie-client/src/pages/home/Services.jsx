import React from "react";
import { GiFruitBowl } from "react-icons/gi";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and  presentation",
    image: "/images/home/services/service-1.svg",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    image: "/images/home/services/service-2.svg",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering n",
    image: "/images/home/services/service-3.svg",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: "/images/home/services/service-4.svg",
  },
];

const Services = () => {
  return (
    <section className="section-container py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left section */}
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>

            <p className="my-5 text-textSmooth leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>

            <button className="bg-coral font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        {/* Right section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {serviceLists.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-coral cursor-pointer hover:border hover:border-pink-600 transition-all duration-200"
              >
                {/* img */}
                <img src={item.image} alt="" className="w-16 mx-auto" />
                <h5 className="font-semibold">{item.title}</h5>
                <p className="text-slate-400">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
