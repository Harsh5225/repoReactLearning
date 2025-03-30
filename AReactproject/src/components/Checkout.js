import React from "react";
import { useSelector } from "react-redux";
import CheckoutHeader from "./CheckoutHeader";

const Checkout = () => {
  const items = useSelector((state) => state.cartSlice.items);
  console.log(items);
  return (
    <div>
      <CheckoutHeader />
      {items.map((val) => (
        <div className="text-2xl w-[50%] bg-orange-100 flex mt-30 rounded-2xl mx-auto  p-10 gap-20">
          <img
            className="h-50 w-40 rounded-2xl image bg-yellow-100 "
            src={"https://media-assets.swiggy.com/" + val.imageId}
          ></img>
          <div className="flex flex-col  justify-center gap-5">
            <h1>{val.name}</h1>
            <h1>₹{val.price || val.defaultPrice}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
