import React from "react";

const Category = () => {
  const categoriesItem = [
    {
      id: 1,
      title: "Breakfast",
      image: "/images/home/category/img1.png",
      description: "(20 dishes)",
    },
    {
      id: 2,
      title: "Popular Dish",
      image: "/images/home/category/img2.png",
      description: "(20 dishes)",
    },
    {
      id: 3,
      title: "Desert",
      image: "/images/home/category/img3.png",
      description: "(20 dishes)",
    },
    {
      id: 4,
      title: "Shakes & Juice",
      image: "/images/home/category/img4.png",
      description: "(20 dishes)",
    },
  ];
  return (
    <section className="section-container py-16">
      {/* text section */}
      <div className="text-center">
        <p className="subtitle">Customer favorite</p>
        <h2 className="title">Our Popular Menu</h2>
      </div>
      {/* category card section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoriesItem.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-60 md:w-80 lg:w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full h-[120px] flex items-center justify-center">
              <img src={item.image} alt="" className="" />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-textSmooth font-semibold">{item.title}</h5>
              <h5 className="text-red text-[11px]">{item.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
