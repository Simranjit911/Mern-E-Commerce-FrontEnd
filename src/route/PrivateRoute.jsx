import { Outlet } from "react-router-dom"
import { useAuth } from "../UserContext"
import axios from "axios"
import { useState,useEffect } from "react"
import { url } from "../BaseUrl"

const PrivateRoute = () => {
    const [ok,setok]=useState(false)
    const [userauth,setuserauth]=useAuth()
    async function authcheck(){
      const res=await axios.get(`${url}/loginverify`)
      if(res.data.ok){
        setok(true)
      }else{
        setok(false)
      }
    }
    useEffect(() => {
      if(userauth?.token) authcheck()
    }, [userauth?.token])
    

  return (
    <div>
      {
        ok?<Outlet/>:"Sign In to access"
      }
    </div>
  )
}

export default PrivateRoute