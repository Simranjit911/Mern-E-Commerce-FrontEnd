import { useState } from "react";
import Adminmenu from "../components/Adminmenu";
import axios from "axios";
import{ url} from "../BaseUrl"
import { toast } from "react-hot-toast";
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    des: "",
    price: "",
    category:"",
    qty: 1,
    shipping: false,
  });
  const [image, setimg] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const productData=new FormData()
    productData.append("name",formData.name)
    productData.append("des",formData.des)
    productData.append("price",formData.price)
    productData.append("qty",formData.qty)
    productData.append("category",formData.category)
    productData.append("image",image)
    const res=await axios.post(`${url}/addproduct`,productData)
    console.log(res.data)
    if(res.status==200){
        toast.success(res.data.msg)
        formData("")
    }else{
        toast.error()
    }
  }

  return (
    <div>
      <Adminmenu />
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-xl text-center font-bold">Add Product</h1>
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
        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="des"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
            name="des"
            value={formData.des}
            onChange={handleChange}
            required
          />
        </div>
        {/* Price */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        {/* Quantity */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qty"
          >
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Quantity"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div>
        {/* Category */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qty"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        {/* Image */}
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={(e) => setimg(e.target.files[0])}
            required
          />
        </div> */}
        {/* Image Link */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="image"
            placeholder="Add Image"
            onChange={(e) => setimg(e.target.value)}
            required
          />
        </div>
        {/* Add Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
