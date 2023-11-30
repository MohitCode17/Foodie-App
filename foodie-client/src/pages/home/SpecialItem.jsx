import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../../components/Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider Next Arrow Function
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

// Slider Prev Arrow Function
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACk
    </div>
  );
};

const SpecialItem = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  // Fetch Popular recipes list
  const fetchPopularItems = async () => {
    const res = await fetch("/menu.json");
    const data = await res.json();
    const popularItems = data.filter((item) => item.category === "popular");
    setRecipes(popularItems);
  };

  useEffect(() => {
    fetchPopularItems();
  }, []);

  // Slick Slider Setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="section-container py-16 relative">
      {/* text section */}
      <div className="text-left">
        <p className="subtitle">Customer Choice</p>
        <h2 className="title">
          Standout Dishes <br /> from our menu's
        </h2>
      </div>

      {/* Arrows */}
      <div className="md:absolute right-0 top-36 mb-10 md:mr-24">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className=" btn p-2 rounded-full ml-5"
        >
          <FaAngleLeft className=" h-8 w-8 p-1" />
        </button>
        <button
          className="bg-coral text-white btn p-2 rounded-full ml-5"
          onClick={() => slider?.current?.slickNext()}
        >
          <FaAngleRight className=" h-8 w-8 p-1" />
        </button>
      </div>

      {/* Slider section */}
      <Slider
        ref={slider}
        {...settings}
        className="mt-12 space-x-5 overflow-hidden"
      >
        {recipes.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </Slider>
    </section>
  );
};

export default SpecialItem;
