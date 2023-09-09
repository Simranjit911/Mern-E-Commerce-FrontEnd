import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
import axios from "axios";
const UserContext = ({children}) => {
  const [userauth, setuserauth] = useState({
    user: null,
    token: "",
  });
//default Authorization
axios.defaults.headers.common["Authorization"]=userauth?.token
useEffect(()=>{
const userdata=localStorage.getItem("auth")
if(userdata){
    let parsedata=JSON.parse(userdata)
    setuserauth({...userauth,user:parsedata.user,token:parsedata.token})
}
},[])

  return (
    <div>
      <AuthContext.Provider value={[userauth,setuserauth]}>
    {children}
      </AuthContext.Provider>
    </div>
  );
};


//Custom Hook
const useAuth=()=>useContext(AuthContext)

export {useAuth,UserContext}
