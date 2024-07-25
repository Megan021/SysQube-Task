import React from 'react'
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";

const Payment = () => {
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));
  const { product, quantity } = cartItem;
  const subtotal = product.price * quantity;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      CardHolderName: "",
      CardNumber: "",
      ExpirationDate: "",
      CVV: "",
    },
    validationSchema: Yup.object({
      CardHolderName: Yup.string().required("Cardholder Name is required"),
      CardNumber: Yup.string().required("Card number is required"),
      ExpirationDate: Yup.string().required("Expiration date is required"),
      CVV: Yup.string().required("CVV is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("PaymentInfo", JSON.stringify(values));
      navigate("/order-review"); 
    },
  });

  const handleBackToProducts = () => {
    window.history.back();
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
        <h1 className="font-medium text-2xl mb-8">Payment Information</h1>
        <div className="md:flex gap-12">
          <div className="md:w-[60%]">
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="CardHolderName"
                  value={formik.values.CardHolderName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CardHolderName && formik.errors.CardHolderName ? (
                  <div className="text-red-600">{formik.errors.CardHolderName}</div>
                ) : null}
              </div>
              <div className="col-span-2">
                <label>Card Number</label>
                <input
                  type="text"
                  name="CardNumber"
                  value={formik.values.CardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CardNumber && formik.errors.CardNumber ? (
                  <div className="text-red-600">{formik.errors.CardNumber}</div>
                ) : null}
              </div>
              <div className='col-span-2 md:col-auto'>
                <label>Expiration Date (MM/YY)</label>
                <input
                  type="month"
                  name="ExpirationDate"
                  value={formik.values.ExpirationDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='MM/YY'
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.ExpirationDate && formik.errors.ExpirationDate ? (
                  <div className="text-red-600">{formik.errors.ExpirationDate}</div>
                ) : null}
              </div>
              <div className='col-span-2 md:col-auto'>
                <label>CVV</label>
                <input
                  type="number"
                  name="CVV"
                  value={formik.values.CVV}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CVV && formik.errors.CVV ? (
                  <div className="text-red-600">{formik.errors.CVV}</div>
                ) : null}
              </div>
              <div className="col-span-2 mt-5">
                <button type="submit" className="p-3 bg-black text-white rounded w-full">
                  Review Order
                </button>
              </div>
            </form>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment