import { useSearch } from "../contaxt/SearchFIlterContext";
import ProductCard from "../snippets/product-card/product-card";
import { Fragment, useState } from "react";

import productss from "../json/products.json"
import ourProductss from "../json/ourProducts.json"
import thisMonthProducts from "../json/thisMonthProducts.json"




function ViewAllProducts() {
    let arr = productss.concat(thisMonthProducts).concat(ourProductss)
    
 

  const { search } = useSearch();

let aa = []
  return (
    <>
      <div className="container">
        <div className="all-projects">
          {arr.map(
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
            {aa.length === arr.length && <h1>Item Not Found</h1> }
        </div>
      </div>
    </>
  );
}
export default ViewAllProducts;
