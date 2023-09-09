import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { url } from "../BaseUrl";
import { add } from "../redux/UserSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
const ProductDetails = () => {
  const [load, setload] = useState(true);
  setTimeout(() => {
    setload(false);
  }, 800);
  let nav = useNavigate("");
  let dis = useDispatch();
  let { id } = useParams();
  const [prod, setprod] = useState({});
  async function singleProd() {
    let { data } = await axios.get(`${url}/singleproduct/${id}`);
    setprod(data.product);
    console.log(prod);
  }
  const { des, category, name, price, image } = prod;

  useEffect(() => {
    singleProd();
  }, []);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row mt-[5%] h-[80%] px-5 min-h-54 md:w-[80%] mx-auto gap-1 my-5 ">
          <Link
            to={"/"}
            className="text-lg md:mt-10 text-slate-700 hover:text-slate-900"
          >
            <HiArrowNarrowLeft />{" "}
          </Link>
          <div className="flex-1 flex items-center mx-auto md:h-full h-1/2">
            <img src={image} alt="" className="mx-auto max-h-64 " />
          </div>
          <div className="flex-1 gap-3 md:pr-1 justify-center flex flex-col pr-1 px-2 ">
            <p className="capitalize text-lg text-slate-800">{category}</p>
            <p className="font-bold text-2xl">{name}</p>
            <p className="text-lg font-medium text-gray-600 pr-0 md:pr-16">
              {des}
            </p>
            <p className="text-slate-900 text-2xl font-bold">₹{price}</p>
            <button
              onClick={() => dis(add(prod))}
              className="bg-gray-800 rounded-sm  text-white shadow-lg  px-2 hover:scale-105 duration-100 hover:bg-gray-900 py-1 mt-1 md:w-1/3"
            >
              Add to Cart
            </button>
            <button
              onClick={() => nav("/cart")}
              className="bg-gray-800 rounded-sm  text-white shadow-lg  px-2 hover:scale-105 duration-100 hover:bg-gray-900 py-1 mt-1 md:w-1/3 md:disabled"
            >
              Go to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
