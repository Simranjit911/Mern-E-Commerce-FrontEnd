
import { Link } from 'react-router-dom'
const Usermenu = () => {
  return (
    <div className='flex bg-slate-600 text-white py-1 gap-4 justify-center px-1 w-full'>
        <Link to={"/dashboard/user"} className='hover:scale-110 duration-100 hover:text-slate-300'>Profile</Link>
        {/* <Link to={"/dashboard/user/orders"} className='hover:scale-110 duration-100 hover:text-slate-300'>Orders</Link> */}
        <Link to={"/dashboard/user/edit"}className='hover:scale-110 duration-100 hover:text-slate-300'>Edit Profile</Link>
    </div>
  )
}

export default Usermenu