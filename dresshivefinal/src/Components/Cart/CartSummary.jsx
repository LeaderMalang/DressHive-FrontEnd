import React from 'react';
import { Link } from 'react-router-dom';

function CartSummary({ cartItems, removeFromCart }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between min-h-[85vh] px-4 md:px-0 ">
      <div className="w-full md:w-[75%] mb-8 md:mb-0 py-4 px-14">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cartItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative  rounded-lg overflow-hidden">
                <div
                  className="pb-[100%] relative"
                  style={{ paddingBottom: '100%' }}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75 ease-in duration-300"
                  />
                </div>

                <h3 className="mt-2 text-lg font-bold text-gray-700 text-left">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900 text-left">{item.price}</p>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 w-full mt-1"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[25%] p-4 bg-black text-white relative">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <span>{item.name} - ${item.price}</span>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-10'>
          <h3 className="text-lg font-semibold mt-4">
            Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0)}
          </h3>
          <div className='w-full flex justify-between items-center mt-5'>
            <Link
              to="/showcase"
              className="text-gray-800 bg-white font-medium text-sm px-2 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="text-white bg-red-600 hover:bg-red-700 font-medium text-sm px-4 lg:px-10 py-2 lg:py-2.5"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
