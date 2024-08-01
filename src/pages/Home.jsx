import React from "react";

import Header from "../common/Header"
import Banner from "../home/banner";
import Project from "../home/Product";
import Categories from "../home/Categories";
import ProductPromotion from "../home/ProductPromotion-section";


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Project title="Today’s" head="Flash Sales"/>
      <Categories title="Categories" head="Browse By Category"/>
      <ProductPromotion />
    </>
  );
};

export default Home;
