import { useEffect, useState } from "react";
import Adminmenu from "../components/Adminmenu";
import axios from "axios";
import { url } from "../BaseUrl";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Products = () => {
  let nav=useNavigate()
  const [prd, setprd] = useState([]);
  async function allProd() {
    let res = await axios.get(`${url}/allproduct`);
    console.log(res);
    if (res.status == 200) {
      setprd(res.data.products);
    }
  }
  useEffect(() => {
    allProd();
  }, []);
  async function handleDelete(id){
    let res=await axios.delete(`${url}/deleteproduct/${id}`)
    console.log(res)
    if(res.status==200){
        toast.success(res.data.msg)
        allProd()
    }
}
  return (
    <div>
      <Adminmenu />
      <table className="border-2 md:w-[90vw] text-center mx-auto shadow-xl w-full">
        <thead className="border-2">
          <tr className="border-2">
            <th className="border">No.</th>
            <th className="border">Image</th>
            <th className="border">Name</th>
            <th className="border">Desc.</th>
            <th className="border">Cat.</th>
            <th className="border">Pr.</th>
            <th className="border">Qty</th>
            <th className="border">Acts</th>
          </tr>
        </thead>
        <tbody>
          {prd.map((items, idx) => {
            let { image, price, des, name, qty, category } = items;
            return (
              <tr key={idx} className="border-2">
                <td className="border-2">{idx + 1}</td>
                <td className="border-2">
                  <img src={image} alt="" className="w-12 mx-auto" />
                </td>
                <td className="border-2">{name}</td>
                <td className="border-2">{des=des.slice(0,4)}.</td>
                <td className="border-2">{category}</td>
                <td className="border-2">{price}</td>
                <td className="border-2">{qty}</td>
                <td className="flex  justify-center gap-2 mt-[5%] items-center text-lg">
                  <td className=" cursor-pointer hover:scale-110 duration-100">
                    <VscEdit onClick={()=>nav("/dashboard/admin/editproduct/"+items._id)}/>
                  </td>
                  <td className=" cursor-pointer hover:scale-110 duration-100">
                    <VscTrash onClick={()=>handleDelete(items._id)}/>
                  </td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
