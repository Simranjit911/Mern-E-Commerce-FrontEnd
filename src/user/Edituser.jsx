import { useState, useEffect } from "react";
import { useAuth } from "../UserContext";
import "../index.css";
import axios from "axios";

import { url } from "../BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Usermenu from "../components/Usermenu";
function Edituser() {
  const [userauth, setuserauth] = useAuth();
  useEffect(() => {
    const { name, email, phone, address, secretanswer } = userauth.user;
    setFormData({
      name,
      email,
      phone,
      address,
      secretanswer,
    });
  }, [userauth?.user]);

  let data = localStorage.getItem("auth");
  let parse = JSON.parse(data);
  console.log(parse);
  let nav = useNavigate();
  //   const url = import.meta.env.PATH;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    secretanswer: "",
    address: "",
  });
  // console.log(url)
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    
    let {data} = await axios.put(`${url}/edit`, formData);
    console.log(data);

    if (data) {
        setuserauth({...userauth,user:data.user})
      toast.success("User Updated Successfully!");
      let ls=localStorage.getItem("auth")
      ls=JSON.parse(ls)
      ls.user=data
      localStorage.setItem("auth",JSON.stringify(ls))
      if(userauth?.user?.role===1){
        nav("/dashboard/admin")
    }else{
          nav("/dashboard/user")
      }
    } else {
      toast.error(" Updation Failed!");
    }
  };

  return (
    <>
      <Usermenu />
      <div className="container mx-auto max-w-md mt-8">
        <h2 className="text-center text-gray-700 text-xl font-semibold">
          Edit Profile:
        </h2>
        <form
          onSubmit={handleEdit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Secret Answer */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="secretanswer"
            >
              Secret Answer
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Secret Answer"
              name="secretanswer"
              value={formData.secretanswer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edituser;
