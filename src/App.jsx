import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import PrivateRoute from "./route/PrivateRoute";
import Userdashboard from "./user/Userdashboard";
import AdminRoute from "./route/AdminRoute";
import Admindashboard from "./admin/Admindashboard";
import Edituser from "./user/Edituser";
import AddProduct from "./admin/AddProduct";
import Products from "./admin/Products";
import EditProduct from "./admin/EditProduct";
import ProductDetails from "./pages/ProductDetails"
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard/user/success" element={<Success />} />
        <Route path="/dashbord/user/cancel" element={<Cancel />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard/user" element={<Userdashboard />} />
          <Route path="/dashboard/user/edit" element={<Edituser/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="/dashboard/admin" element={<Admindashboard />} />
          <Route path="/dashboard/admin/addproduct" element={<AddProduct />} />
          <Route path="/dashboard/admin/products" element={<Products />} />
          <Route path="/dashboard/admin/editproduct/:id" element={<EditProduct />} />
        </Route>
      </Routes>
      
    </div>
  );
};

export default App;
