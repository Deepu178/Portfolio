import React from "react";
import {
  Navbar,
  Hero,
  Opensource,
  Personal,
  Freelance,
  Projectone,
  Footer,
} from "../../components/index";

export const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Opensource />
      <Personal />
      <Freelance />
      <Projectone />
      <Footer />
    </div>
  );
};
