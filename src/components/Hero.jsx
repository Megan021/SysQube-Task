import React from "react";
import Navbar from "./Navbar";
import MostPopular from "./Product";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="relative text-white">
        <div className='bg-[url("/images/bg.jpg")] w-full bg-cover bg-center absolute top-0 h-[45rem] lg:h-[45rem] md:h-[50rem] bg-fixed'>
          <div className="text-center  bg-black h-full bg-opacity-40">
            <Navbar />
            <div className="lg:w-[39%] md:w-[75%] mx-auto lg:mt-44 md:mt-60 mt-48 px-4 lg:px-0">
              <p className="uppercase text-sm">casual & everyday</p>
              <h1 className="playwrite italic text-2xl md:text-4xl leading-[4rem] md:leading-[6rem] pb-4">
                Effortlessly Blend Comfort & Style!
              </h1>
              <p className="text-sm">
                Effortlessly blend comfort and style with our Everyday
                collection, featuring cozy sweaters, versatile denim, laid-back
                tees, and relaxed-fit joggers for your adventures
              </p>
              <Link to="product" smooth={true} duration={1000}>
              <button className="uppercase p-3 px-9 border border-white mt-6 text-sm hover:bg-white hover:text-black duration-300">View Products</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <MostPopular />
    </>
  );
};

export default Hero;
