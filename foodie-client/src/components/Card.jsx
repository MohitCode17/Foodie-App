import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Card = ({ item }) => {
  const [isHeartFill, setHeartFill] = useState(false);

  const handleHeartFill = () => {
    setHeartFill(!isHeartFill);
  };

  return (
    <div className="card shadow-xl mr-10 md:my-5 relative">
      <div
        className={`absolute right-0 top-0 cursor-pointer bg-coral p-[14px] heartStar ${
          isHeartFill
            ? "text-pink-600 transition-all duration-300 ease-in-out"
            : "text-white"
        }`}
        onClick={handleHeartFill}
      >
        <FaHeart />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure className="w-full p-5">
          <img
            src={item.image}
            alt={item.name}
            className="hover:scale-105 transition-all duration-300 w-[200px]"
          />
        </figure>
      </Link>

      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p className="text-sm text-textSmooth">
          This is going to be product description
        </p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button className="btn bg-coral text-white hover:bg-lightCoral">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
