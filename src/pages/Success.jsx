
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Success = () => {
  let nav = useNavigate();
  setTimeout(() => {
    nav("/");
  }, 2000);
  return (
    <div className="flex flex-col gap-2 text-lg w-full mt-[10%] items-center justify-center">
      <FcApproval className="text-3xl" />
      <p className="text-xl font-semibold">Payment Successfull</p>
    </div>
  );
};

export default Success;
