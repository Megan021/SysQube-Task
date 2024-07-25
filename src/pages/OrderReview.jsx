import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const OrderReview = () => {
  const navigate = useNavigate();
  const delivery = 100;
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));
  const initialShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const initialPaymentInfo = JSON.parse(localStorage.getItem("PaymentInfo"));
  const { product, quantity, selectedSize } = cartItem;
  const subtotal = product.price * quantity;
  const total = subtotal + delivery;

  const [shippingInfo, setShippingInfo] = useState(initialShippingInfo);
  const [paymentInfo, setPaymentInfo] = useState(initialPaymentInfo);
  const [isEditingShipping, setIsEditingShipping] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);

  const handleBackToProducts = () => {
    window.history.back();
  };

  const handleProceedToCheckout = () => {
    localStorage.removeItem("shippingInfo");
    localStorage.removeItem("cartItem");
    localStorage.removeItem("PaymentInfo");
    toast.success("Order Successfully Done!");
    navigate("/order-success");
  };
  

  const handleSaveShippingInfo = () => {
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    setIsEditingShipping(false);
  };

  const handleSavePaymentInfo = () => {
    localStorage.setItem("PaymentInfo", JSON.stringify(paymentInfo));
    setIsEditingPayment(false);
  };

  return (
    <>
      <div className="container py-12 px-4 lg:px-0">
        <button
          onClick={handleBackToProducts}
          className="mb-4 flex items-center gap-2 rounded"
        >
          <TbArrowBackUp />
          Back
        </button>
        <h1 className="font-medium text-2xl mb-4">Order Review</h1>
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
                <h2 className="font-medium text-xl mb-3 mt-5 md:mt-0">
                  {product.title}
                </h2>
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
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-y my-8 py-5 border-gray-300 px-3">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-medium text-xl">Shipping Info</h2>
                <button
                  onClick={() => setIsEditingShipping(!isEditingShipping)}
                  className="flex items-center gap-1"
                >
                  <CiEdit /> Edit
                </button>
              </div>
              {isEditingShipping ? (
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.fullName}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="Full Name"
                  />
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.address}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                    placeholder="Address"
                  />
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                    placeholder="City"
                  />
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.state}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        state: e.target.value,
                      })
                    }
                    placeholder="State"
                  />
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.country}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        country: e.target.value,
                      })
                    }
                    placeholder="Country"
                  />
                  <input
                  className="p-3 border border-gray-300"
                    type="text"
                    value={shippingInfo.phone}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Phone"
                  />
                  <button className="flex underline ml-2" onClick={handleSaveShippingInfo}>Save</button>
                </div>
              ) : (
                <div>
                  <p>{shippingInfo.fullName}</p>
                  <p>{shippingInfo.address}</p>
                  <p>{shippingInfo.city}</p>
                  <p>{shippingInfo.state}</p>
                  <p>{shippingInfo.country}</p>
                  <p>{shippingInfo.phone}</p>
                </div>
              )}
            </div>

            {/* Payment Info */}
            <div className="border-b my-8 py-5 border-gray-300 px-3">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-medium text-xl">Payment Info</h2>
                <button
                  onClick={() => setIsEditingPayment(!isEditingPayment)}
                  className="flex items-center gap-1"
                >
                  <CiEdit /> Edit
                </button>
              </div>
              {isEditingPayment ? (
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                  className="border border-gray-300 p-3"
                    type="text"
                    value={paymentInfo.CardHolderName}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        CardHolderName: e.target.value,
                      })
                    }
                    placeholder="Card Holder Name"
                  />
                  <input
                  className="border border-gray-300 p-3"
                    type="text"
                    value={paymentInfo.CardNumber}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        CardNumber: e.target.value,
                      })
                    }
                    placeholder="Card Number"
                  />
                  <input
                  className="border border-gray-300 p-3"
                    type="text"
                    value={paymentInfo.CVV}
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, CVV: e.target.value })
                    }
                    placeholder="CVV"
                  />
                  <input
                  className="border border-gray-300 p-3"
                    type="text"
                    value={paymentInfo.ExpirationDate}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        ExpirationDate: e.target.value,
                      })
                    }
                    placeholder="Expiration Date"
                  />
                  <button className="flex underline ml-2" onClick={handleSavePaymentInfo}>Save</button>
                </div>
              ) : (
                <div>
                  <p>{paymentInfo.CardHolderName}</p>
                  <p>{paymentInfo.CardNumber}</p>
                  <p>{paymentInfo.CVV}</p>
                  <p>{paymentInfo.ExpirationDate}</p>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-[40%] mt-8 md:mt-0">
            <div className="border border-gray-300 shadow rounded p-5 px-7 sticky top-10">
              <h2 className="font-medium text-xl mb-5">Order Summary</h2>
              <div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <p>SubTotal:</p>
                  <p>Rs. {subtotal}</p>
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2 mt-7">
                  <p>Delivery:</p>
                  <p>Rs. {delivery}</p>
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2 mt-7">
                  <p>Total:</p>
                  <p>Rs. {total}</p>
                </div>
                <div className="mt-8">
                  <button
                    onClick={handleProceedToCheckout}
                    className="p-3 bg-black text-white rounded w-full"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReview;
