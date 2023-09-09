import React from "react";
import { add} from "../redux/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartItem = ({ data }) => {
  let dis = useDispatch();
  let { image, price, desc, qty, category, name } = data;
  let nav=useNavigate()

  return (
    <div className="my-3 flex flex-col gap-2 rounded-md overflow-hidden justify-between items-center w-[290px] mx-auto shadow-xl rounded-xl pb-3">
      <div className="overflow-hidden h-[70%] m-auto">
        <img src={image} alt="" className="hover:scale-105 duration-100 my-auto max-h-60 object-contain" />
      </div>
      <div className="flex w-full px-2 justify-between">
        <div className="">
          <p className="capitalize text-slate-600 text-sm">{category}</p>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-slate-900 text-md font-semibold">₹{price}</p>
        </div>           
      </div>
      <div className="flex gap-8">      
      <button onClick={() => nav("/product/"+data._id)} className="bg-gray-800  text-center text-white shadow-lg mx-auto px-2 hover:scale-110 duration-100 hover:bg-gray-950 mt-1" >View More</button>
      <button onClick={() => dis(add(data))} className="bg-gray-800  text-center text-white shadow-lg mx-auto px-2 hover:scale-110 duration-100 hover:bg-gray-950 mt-1" >Add to Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
