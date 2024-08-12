import { useSearch } from "../contaxt/SearchFIlterContext";
import ProductCard from "../snippets/product-card/product-card";
import ImgPath from "../assets/images/ImgPath";
import { Fragment, useState } from "react";


function ViewAllProducts() {
  const array3 = [
    {
      image: ImgPath.product1,
      head: "HAVIT HV-G92 Gamepad",
      price: "$120",
      rate: "88",
      percentOFF: 40,
    },
    {
      image: ImgPath.product2,
      head: "AK-900 Wired Keyboard",
      price: "$960",
      rate: "75",
      percentOFF: 35,
    },
    {
      image: ImgPath.product3,
      head: "IPS LCD Gaming Monitor",
      price: "$370",
      rate: "99",
      percentOFF: 40,
    },
    {
      image: ImgPath.product4,
      head: "S-Series Comfort Chair ",
      price: "$375",
      rate: "74",
      percentOFF: 50,
    },
    {
      image: ImgPath.product5,
      head: "RGB liquid CPU Cooler",
      price: "$375",
      rate: "88",
      percentOFF: 60,
    },
    {
      image: ImgPath.product6,
      head: "ASUS FHD Gaming Laptop",
      price: "$375",
      rate: "88",
      percentOFF: 15,
    },
    {
      image: ImgPath.ourProduct1,
      head: "Breed Dry Dog Food",
      price: "$99",
      rate: "88",
    },
    {
      image: ImgPath.ourProduct2,
      head: "CANON EOS DSLR Camera",
      price: "$1599",
      rate: "75",
    },
    {
      image: ImgPath.ourProduct3,
      head: "ASUS FHD Gaming Laptop",
      price: "$2599",
      rate: "99",
    },
    {
      image: ImgPath.ourProduct4,
      head: "Curology Product Set  ",
      price: "$500",
      rate: "74",
    },
    {
      image: ImgPath.ourProduct5,
      head: "Kids Electric Car",
      price: "$960",
      rate: "88",
      percentOFF: "NEW",
    },
    {
      image: ImgPath.ourProduct6,
      head: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rate: "75",
    },
    {
      image: ImgPath.ourProduct7,
      head: "GP11 Shooter USB Gamepad",
      price: "$770",
      rate: "55",
      percentOFF: "NEW",
    },
    {
      image: ImgPath.ourProduct8,
      head: "Quilted Satin Jacket ",
      price: "$660",
      rate: "60",
    },
    {
      image: ImgPath.thismonth1,
      head: "The north coat",
      price: "$260",
      rate: "88",
    },
    {
      image: ImgPath.thismonth2,
      head: "Gucci duffle bag",
      price: "$960",
      rate: "75",
    },
    {
      image: ImgPath.thismonth3,
      head: "RGB liquid CPU Cooler",
      price: "$160",
      rate: "99",
    },
    {
      image: ImgPath.thismonth4,
      head: "Small BookSelf ",
      price: "$360",
      rate: "74",
    },
  ];

  const { search } = useSearch();

let aa = []
  return (
    <>
      <div className="container">
        <div className="all-projects">
          {array3.map(
            (i, index) =>
              i.head.toLowerCase().includes(search.toLowerCase()) ? (
                <Fragment key={index}>
                  <ProductCard
                    image={i.image}
                    head={i.head}
                    price={i.price}
                    rate={i.rate}
                    percentOFF={i.percentOFF}
                  />
                </Fragment>
              
              ): "" !== aa.push(1) 
               
            )}
            {aa.length === array3.length ? <h1>Item Not Found</h1> : ""}
        </div>
      </div>
    </>
  );
}
export default ViewAllProducts;
