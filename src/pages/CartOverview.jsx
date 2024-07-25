import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const CartOverview = () => {
  const navigate = useNavigate();
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));

  if (!cartItem) {
    return (
      <div className="text-center lg:py-32 py-44">
        <img
          src="/images/emptycart.png"
          alt="empty cart"
          className="lg:w-[20%] w-[50%] mx-auto"
        />
        <h2 className="text-2xl py-5">No items in cart</h2>
        <Link to="/">
          <button className="p-3 px-6 bg-black text-white">Back to Home</button>
        </Link>
      </div>
    );
  }

  const { product, quantity, selectedSize } = cartItem;

  const subtotal = product.price * quantity;

    const handleProceedToCheckout = () => {
      navigate("/shipping-info");
    };

  const handleBackToProducts = () => {
    window.history.back();
  };

  const handleDelete = () => {
    localStorage.removeItem("cartItem");
    console.log("Item removed");
    window.location.reload();
  };

  return (
    <div className="container py-12 px-4 lg:px-0">
      <button
        onClick={handleBackToProducts}
        className="mb-4 flex items-center gap-2 rounded"
      >
        <TbArrowBackUp />
        Back
      </button>
      <h1 className="font-medium text-2xl mb-4">Cart Overview</h1>
      <div className="md:flex gap-8">
        <div className="lg:w-[60%]">
          <div className="border border-gray-300 md:flex items-center gap-5 relative p-5 lg:p-0">
            <div>
              <img
                src={product.image}
                alt={product.image}
                className="md:size-40"
              />
            </div>
            <div>
              <h2 className="font-medium text-xl mb-3 mt-5 md:mt-0">{product.title}</h2>
              <div className="flex justify-between">
                <div className="text-sm space-y-1">
                  <p>Rs. {product.price}</p>
                  <p>
                    <span className="font-medium">Qty:</span> {quantity}
                  </p>
                  <p>
                    <span className="font-medium">Size:</span> {selectedSize}
                  </p>
                </div>

                <div className="lg:hidden mr-5 mt-2 lg:mt-0">
                  <button
                    onClick={handleDelete}
                    className="text-white bg-red-600 p-3 text-2xl rounded"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute right-5">
            <button
                    onClick={handleDelete}
                    className="text-white bg-red-600 p-3 text-2xl rounded"
                  >
                    <MdDeleteOutline />
                  </button>
            </div>
          </div>
        </div>

        <div className="md:w-[40%] mt-8 md:mt-0">
          <div className="border border-gray-300 shadow rounded p-5 px-7">
            <h2 className="font-medium text-xl mb-5">Order Summary</h2>
            <div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                <div>
                  <p>SubTotal:</p>
                </div>
                <div>
                  <p>Rs. {subtotal}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-2 mt-7">
                <div>
                  <p>Total:</p>
                </div>
                <div>
                  <p>Rs. {subtotal}</p>
                </div>
              </div>
              <div className="mt-8">
                <button onClick={handleProceedToCheckout} className="p-3 bg-black text-white rounded w-full">
                  Proceed to Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOverview;
