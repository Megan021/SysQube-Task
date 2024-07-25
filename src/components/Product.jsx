import React from "react";
import Product from "../data/product.json";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const MostPopular = () => {
  return (
    <>
      <div className="container pt-[50rem] lg:pt-[50rem] md:pt-[55rem] pb-12 md:pb-28 lg:pb-24 px-4 lg:px-0">
        <div className="flex items-center justify-between pb-5">
          <div name="product">
            <h1 className="text-2xl font-medium pb-2">Product</h1>
          </div>
          {/* <div>
            <button>View More</button>
          </div> */}
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Product?.map((product) => (
              <Link to={`/product-detail/${product.id}`}>
                <div key={product.id} className=" border border-white hover:border-black group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[5/5] object-cover object-top "
                  />
                  <div className="p-3">
                    <h2 className=" font-medium line-clamp-1 text-sm">
                      {product.title}
                    </h2>
                    <p className="text-sm">Rs. {product.price}</p>
                    <button className="text-sm flex items-center gap-2">View More <GoArrowRight className="group-hover:-rotate-45 duration-300" /></button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
