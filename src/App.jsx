import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
// import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import CartOverview from "./pages/CartOverview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import OrderReview from "./pages/OrderReview";
import OrderSuccessful from "./pages/OrderSuccessful";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart-overview" element={<CartOverview />} />
          <Route path="/shipping-info" element={<Shipping />} />
          <Route path="/payment-info" element={<Payment />} />
          <Route path="/order-review" element={<OrderReview />} />
          <Route path="/order-success" element={<OrderSuccessful />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
