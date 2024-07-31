import React from "react";

import Header from "../common/Header"
import Banner from "../home/banner";
import Project from "../home/Product";
import Categories from "../home/Categories";


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Project title="Today’s" head="Flash Sales"/>
      <Categories title="Categories" head="Browse By Category"/>
    </>
  );
};

export default Home;
