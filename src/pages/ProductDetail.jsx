import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Product from '../data/product.json';
import { TbArrowBackUp } from "react-icons/tb";
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const product = Product.find((product) => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCheckout = () => {
    if (!selectedSize) {
     //  alert("Please select a size before proceeding to checkout.");
      toast.info("Please select a size before proceeding to checkout.");
      return;
    }
    const cartItem = { product, quantity, selectedSize };
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
    navigate('/cart-overview');
  };

  return (
    <>
      <div className='container md:py-12 py-6 px-4 lg:px-0'>
        <button className='mb-4 flex items-center gap-2 rounded' onClick={handleBack}><TbArrowBackUp />Back</button>
        <div className='sm:flex items-center gap-14'>
          <div className='flex-1 flex justify-center mb-6 lg:mb-0'>
            <img src={product.image} alt={product.title} className='lg:h-[35rem] w-full object-contain' />
          </div>

          <div className='flex-1'>
            <h1 className='font-medium text-2xl'>{product.title}</h1>
            <p className='py-4 font-light'>{product.description}</p>
            <p className='text-xl '>Rs. {product.price}</p>

            <div className='my-5'>
              <ul className='flex gap-3 items-center'>
                <h3 className='font-medium text-lg'>Size:</h3>
                {product.sizes?.map((size) => (
                  <li
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`border border-black text-xl px-3 p-1 rounded hover:bg-black hover:text-white duration-200 cursor-pointer ${
                      selectedSize === size ? 'bg-black text-white' : ''
                    }`}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            <div className='py-5 flex gap-6'>
              <div><button className='text-white bg-black p-3 px-7 rounded' onClick={handleCheckout}>Checkout</button></div>
              <div className='flex items-center gap-3 border border-gray-300 rounded p-3 shadow'>
                <button onClick={handleDecrement} disabled={quantity === 1} className='font-medium'>-</button>
                <p className='w-8 text-center'>{quantity}</p>
                <button onClick={handleIncrement} className='font-medium'>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
