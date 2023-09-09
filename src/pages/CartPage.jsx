import { useEffect, useState } from "react";
import { carttotal} from "../redux/UserSlice";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../UserContext";
import { url } from "../BaseUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
const CartPage = () => {
  let nav=useNavigate()
  const [load, setload] = useState(true);
  const [userauth] = useAuth();
  console.log(userauth);
  let dis = useDispatch();
  let { cart, total, orders } = useSelector((state) => state.cart);
  console.log(orders);
  useEffect(() => {
    dis(carttotal());
 
   
  }, [cart]);
 setTimeout(() => {
      setload(false);
    }, 800);
  async function makePayment() {
    if(!userauth.user){
      nav("/login")
      return toast.error("Login to Checkout")
    }
    const stripe = await loadStripe(
      "pk_test_51No9HkSEbzj26ICpC5LD4VhE4Y4eVZiYo4HwjMlitEnQAptAxJWazvYJ9EWWrwwS29xKGWMu3ajuUWZAlHTgnelw00booOCeAV"
    );
    const res = await axios.post(`${url}/create-checkout-session`, cart);
    const session = await res.data;
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      toast.error(result.error);
    }
  }

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 my-5 mb-24 gap-y-6 px-4 mx-auto">
          {cart.length > 0 ? (
            cart.map((item) => {
              return <CartItem data={item} key={item._id} />;
            })
          ) : (
            <div className="self-center w-full text-lg text-center font-semibold absolute top-40">
              <p>Nothing In Cart</p>
              <Link to="/" className="text-blue-500">
                {" "}
                -- Continue Shopping{" "}
              </Link>
            </div>
          )}
        </div>
      )}
      {!load && cart.length > 0 &&
        (
          <div className="fixed  bottom-0  gap-0.5 justify-center bg-blue-200 flex w-[100vw] py-2 flex-col text-lg font-semibold shadow-xl">
            <p className="text-center">Total:₹{total}</p>
            <button
              onClick={makePayment}
              className="bg-slate-800 w-1/3 mx-auto text-white active:bg-slate-950 active:scale-90 duration-100"
            >
              Checkout
            </button>
          </div>
        )}
    </>
  );
};

export default CartPage;
