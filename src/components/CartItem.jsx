import React from "react";
import { incqty, decqty, remove } from "../redux/UserSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ data }) => {
  let dis = useDispatch();
  let { image, price, desc, qty, category, name } = data;

  return (
    <div className="flex flex-col gap-2 rounded-md overflow-hidden justify-between items-center w-[280px] mx-auto shadow-xl rounded-xl pb-3">
      <div className="overflow-hidden flex-1 max-h-48">
        <img src={image} alt="" className="hover:scale-105 duration-100 max-h-48" />
      </div>
      <div className="flex w-full px-2 justify-between ">
        <div className="">
          <p className="capitalize text-slate-600 text-sm">{category}</p>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-slate-800 text-md font-semibold">₹{price}</p>
        </div>
        <div className="flex  flex-col max-h-20  gap-1 bg-gray-200 px-3 rounded-md shadow-xl ">
        <p className="text-center">Qty</p>
        <div className="flex gap-3 items-center justify-center my-auto">
          <p onClick={() => dis(incqty(data))} className="cursor-pointer text-lg hover:scale-105 duration-100">+</p>
          <p className="font-semibold text-lg">{qty}</p>
          <p onClick={() => dis(decqty(data))}className="cursor-pointer text-xl font-semibold mb-1 hover:scale-105 duration-100">-</p>
        </div>
        </div>        
      </div>
      <div className="flex flex-col">
      <p className="text-lg font-semibold">Subtotal-₹{qty*price}</p>
      <button onClick={() => dis(remove(data))} className="bg-gray-800 text-center text-white shadow-lg  px-2 hover:scale-110 duration-100 hover:bg-gray-950 mt-1" >Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
