import Adminmenu from "../components/Adminmenu"

import {useAuth} from "../UserContext"
const Admindashboard = () => {
  const [userauth]=useAuth()
  return (
    <div className="flex flex-col  items-center w-full bg-blue-200  h-[100vh]">
      <Adminmenu/>
      <div className=" w-[80%] md:w-1/3  items-center text-gray-900 flex flex-col bg-gray-300 px-5 py-2 shadow-xl rounded-lg gap-4 text-lg text-slate-950 ">
      <h1 className="text-xl font-semibold">User Details:</h1>
      <h2><span className="text-xl font-semibold">Name: </span>{userauth?.user?.name}</h2>
      <h2><span className="text-xl font-semibold">Email: </span>{userauth?.user?.email}</h2>
      <h2><span className="text-xl font-semibold">Phone: </span>{userauth?.user?.phone}</h2>
      <h2><span className="text-xl font-semibold">Address: </span>{userauth?.user?.address}</h2>
      </div>
    </div>
  )
}

export default Admindashboard