
import { Link } from 'react-router-dom'
const Adminmenu = () => {
  return (
    <div className='flex bg-slate-600 text-white py-1 gap-4 justify-center px-1 w-full'>
        <Link to={"/dashboard/admin"} className='hover:scale-110 duration-100 hover:text-slate-300'>Profile</Link>
        {/* <Link to={"/dashboard/admin/orders"} className='hover:scale-110 duration-100 hover:text-slate-300'>Orders</Link> */}
        <Link to={"/dashboard/admin/addproduct"} className='hover:scale-110 duration-100 hover:text-slate-300'>Add Products</Link>
        <Link to={"/dashboard/admin/products"} className='hover:scale-110 duration-100 hover:text-slate-300'>All Products</Link>
        
    </div>
  )
}

export default Adminmenu