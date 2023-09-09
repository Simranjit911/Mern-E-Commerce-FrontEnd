
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex mx-auto justify-center items-center mt-12">
       <TailSpin
      height="80"
      width="80"
      color="#1f2937"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
   
  );
};

export default Loader;
