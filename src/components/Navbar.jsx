import React, { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky top-0 ${scroll ? 'bg-white text-black shadow-md' : 'bg-transparent'} transition-colors duration-300`}>
        <div className="container flex items-center justify-between py-4 px-4 lg:px-0">
          <div>
            <ul className="md:flex gap-8 hidden">
              <Link to="/"><li>Home</li></Link>
              {/* <Link to="/product"><li>Product</li></Link> */}
            </ul>
          </div>
          <div>
            <Link to="/">
              <h1 className="text-xl font-semibold italic underline-offset-4 underline">SysQube Store</h1>
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <RiShoppingCartLine className="text-xl" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
