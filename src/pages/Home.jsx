import { useEffect, useState } from "react";
import { url } from "../BaseUrl";
import "../index.css"
import axios from "axios";

import ProductItem from "../components/ProductItem";

import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Home = () => {
  let [srch, setsrch] = useState("");
  const [load, setload] = useState(true);
  const [product, setproduct] = useState([]);



  async function allprod() {
    const res = await axios.get(`${url}/allproduct`);    
    if (res.status === 200) {
      setproduct(res.data.products);
    setload(false);      
    }
  }

  useEffect(() => {
    allprod();
  }, []);

  // Filter the products based on the search input
  const filteredProducts = product.filter((item) => {
    return srch.toLowerCase() === "" || item.category.toLowerCase().includes(srch);
  });

  return (
    <>

        <div className="home overflow-x-hidden">
          <Sliders />
          <div className="mx-auto mt-16 md:w-1/3 w-[70%]">
            <input
              type="search"
              value={srch}
              onChange={(e) => setsrch(e.target.value.toLowerCase())}
              placeholder="Search Laptop, Phone, Watch etc"
              className="w-full mx-auto shadow-xl"
            />
          </div>
       {load ? ( <Loader />) : ( <div className="container grid mx-auto sm:grid-cols-2 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 container my-10 md:mt-12 px-3 gap-y-3">
            {filteredProducts.length === 0 ? (
              // Display a "No data found" message when no results are found
              <div className="self-center  text-gray-600">No Product found.</div>
            ) : (
              // Display the filtered products
              filteredProducts.map((item, idx) => {
                return <ProductItem key={idx} data={item} />;
              })
            )}
          </div> )}
          <Footer />
        </div>
    </>
  );
};

export default Home;
