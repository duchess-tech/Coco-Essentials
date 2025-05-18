import { useContext, useEffect, useState } from "react";
import Cartcontext from "../cartcontext";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoReloadCircleSharp } from "react-icons/io5";

const AdminNav = () => {
    const {setLogin,
        setisadmin,
        loadUser
      } = useContext(Cartcontext);
const [loading,setLoading]=useState(false)

useEffect(()=>{
  loadUser(); 
},[])


const navigate=useNavigate()
      const handleSetLogOut=()=>{
        setLoading(true)
        try{
          localStorage.removeItem("Login")
          localStorage.removeItem("Admin")
          localStorage.removeItem("token")
          localStorage.removeItem("refreshToken")
          setisadmin(false)
          setLogin(false)
          navigate("/")
        }catch(error){
console.error(error)
        }finally{
          setLoading(false)
        }
        
      }
  return (
   <div className="flex flex-wrap justify-center  sm:flex xl:flex md:fl-row lg:flex-row fixed sm:flex-col  top-0 bg-white border-b-2 z-50 w-full items-center p-2 sm:justify-between">
<Link to={"/adminHome"}>
<div className=" w-32 overflow-hidden ">
  <img src="/cocoLogo1.png" alt="" className=""/>
</div>

</Link>


     <div className="flex  p-3 text-[12px] gap-3 ">
 <Link to={"/AddProduct"}>
 <button className="p-1 border-black border rounded-sm">
            Add products
          </button> </Link>

          <Link to={"/stock"}>
 <button className="p-1 w-24 border-black border rounded-sm">
            Stock
          </button> </Link>

          <Link to={"/"}>
 <button className="p-1 border-black border rounded-sm">
          Switch to User
          </button> </Link>
<button onClick={handleSetLogOut}>
            
           {loading? <IoReloadCircleSharp className="animate-spin"/>:<span  className="flex items-center"><AiOutlineLogin/>Logout</span>}
          </button>


      
    </div>
   </div>
  )
}

export default AdminNav