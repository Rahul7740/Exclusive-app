import React from "react";

import Header from "../common/Header"
import Banner from "../home/banner";
import Project from "../home/Product";
import Categories from "../home/Categories";
import ProductPromotion from "../home/ProductPromotion-section";
import ThisMothProducts from "../home/ThisMothProducts";
import OurProducts from "../home/OurProducts";
import Featured from "../home/Featured";
import Services from "../home/Services";


const Home = () => {
  return (
    <>
      <Banner />
      <Project title="Today's" head="Flash Sales"/>
      <Categories title="Categories" head="Browse By Category"/>
      <ThisMothProducts  title="This Month" head="Best Selling Products" />
      <ProductPromotion />
      <OurProducts title="Our Products" head="Explore Our Products"/>
      <Featured title="Featured" head="New Arrival" />
      <Services />
    </>
  );
};

export default Home;
