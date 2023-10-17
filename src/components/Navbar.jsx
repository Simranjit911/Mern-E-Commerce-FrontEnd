import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { useAuth } from "../UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  let cartL = useSelector((state) => state.cart.cart);
  let nav = useNavigate();
  const [userauth, setuserauth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  function handleLogout() {
    toast.success("logout");
    setuserauth({ ...userauth, user: null, token: "" });
    localStorage.removeItem("auth");
    nav("/");
  }

  return (
    <nav className="bg-gray-800 text-white r shadow-md w-full mx-auto">
      {/* main div */}
      <div className=" w-full px-4 py-2  flex items-cente flex-col md:flex-row  md:px-16 md:py-3">
        {/* logo and ham */}
        <div className="flex  justify-between  items-center md:mb-0">
          <Link to="/" className="text-lg font-md flex items-center">
            Fake{" "}
            <span className="text-lg">
              <ImCart />
            </span>{" "}
            .com
          </Link>

          {/* Hamburger Menu on Mobile */}
          <div className="md:hidden ml-4">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-white transition-all hover:text-gray-300 focus:outline-none active:duration-100"
            >
              <svg
                className="w-6 h-6 pt-0.5 duration-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div
          className={`justify-end md:gap-2 transition-all duration-100 text-center md:flex md:flex-grow md:items-center ${
            isOpen ? "block" : "hidden"
          } md:ml-4`}
        >
          {userauth.user ? (
            <ul className="md:flex md:space-x-4 md:gap-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/${
                    userauth?.user?.role === 1 ? "admin" : "user"
                  }`}
                  className="hover:text-gray-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-300">
                  Cart
                  <span
                    className={`relative bottom-2 right-0 text-xs ${
                      cartL > 0 && "animate-bounce delay-500 transition-all"
                    }`}
                  >
                    {cartL.length > 0 ? `${cartL.length}` : " "}
                  </span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link to="/logout" className="hover:text-gray-300">
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="md:flex md:space-x-4 md:gap-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-300">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-300">
                  Cart
                  <span
                    className={`relative bottom-2 right-0 text-xs ${
                      cartL > 0 && "animate-bounce delay-500 transition-all"
                    }`}
                  >
                    {cartL.length > 0 ? `${cartL.length}` : " "}
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
