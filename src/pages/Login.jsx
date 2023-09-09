import { useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../UserContext";
import { url } from "../BaseUrl";
function Login() {
  let nav = useNavigate();
  const [userauth, setuserauth] = useAuth();
  //   const url = import.meta.env.PATH;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // console.log(url)
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${url}/login`, formData);
      console.log(res.data);

      if (res.status == 200) {
        setuserauth({
          ...userauth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success("User Login Successfully!");
        nav("/");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container  mx-auto max-w-md mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4"
      >
        <p className="text-center font-semibold text-lg">Login Now!</p>
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
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 12l-2.293-2.293a1 1 0 010-1.414z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 3L3 10M3 3l7 7m4 0l7-7M21 10l-7 7"
                  ></path>
                </svg>
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <Link to={"/forgetpassword"}>
            <button className="text-gray-800 hover:scale-110 hover:text-gray-900 hover:font-semibold duration-100  text-md font-meduim py-2 px-4 rounded ">
              Forget Password!
            </button>
          </Link>

          <span className="text-black font-bold py-2 px-4 mt-5 rounded ">
            Don't Have Account? <br />{" "}
            <Link to={"/signup"}>
              <button className="text-blue-600  hover:scale-105 duration-100 mx-auto w-full">
                Sign Up Now!
              </button>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
