import React from "react";
import { Link } from "react-router";
const CheckoutHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full  z-50 bg-white shadow-md  ">
      <div className="container mx-auto py-4 px-8 flex justify-between items-center">
        {/* Swiggy Logo */}
        <div>
          <Link to="/">
            <p className="bg-orange-600 text-white text-2xl font-bold px-4 py-2 rounded-lg shadow-md">
              Swiggy
            </p>
          </Link>
        </div>
        {/* Cart Section */}
        
          <p className="text-lg font-medium text-black-700 bg-gray-200 px-4 py-2 rounded-lg">
            Help
          </p>
        
      </div>
    </div>
  );
};

export default CheckoutHeader;
