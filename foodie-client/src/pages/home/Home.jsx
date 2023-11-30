import React from "react";
import Hero from "../../components/Hero";
import Category from "./Category";
import SpecialItem from "./SpecialItem";
import Testimonials from "./Testimonials";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <SpecialItem />
      <Testimonials />
      <Services />
    </div>
  );
};

export default Home;
