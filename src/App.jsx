
import { useContext, useEffect, useState } from "react";
import NewArrivals from "./components/NewArrivals";
import Banner from "./components/banner";
import Banner2 from "./components/banner2";
import Products from "./components/products";
import "./index.css";
import Defaultlayout from "./layout/Defaultlayout";
import { IoLogoWhatsapp } from "react-icons/io";
import { generateSessionId } from "./utils/uniqueId";
import Cartcontext from "./cartcontext";
import { useSelector } from "react-redux";
import { selectCart } from "./stores/features/cart/cartSlice";
import { useLocation } from "react-router-dom";
import DialogModel from "./components/dialog";


function Home() {
 const {setCartLength,loadUser}=useContext(Cartcontext)
 const { totalQuantity} = useSelector(selectCart)
 const location = useLocation();
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 useEffect(() => {
  if (location.state?.showSuccessDialog) {
    setIsDialogOpen(true);
  }
  
}, [location.state]);


 useEffect(() => {
  generateSessionId();
}, [])


 useEffect(()=>{
  loadUser(); 
},[])


  useEffect(() => {
    setCartLength(totalQuantity);
  }, [totalQuantity,setCartLength]);


 
  return (
    <main >
   < Defaultlayout >
      <div>
      <Banner />
      <Products />
      <Banner2 />
      <NewArrivals />
      </div>
       </Defaultlayout >
       <div className=""  >
       <a href="https://wa.link/drr4ky">
 <div className="appColor w-16 flex justify-center z-40 items-center h-16 rounded-full right-10 border-2 fixed bottom-10">
   <IoLogoWhatsapp
   size={40}
    className="  text-white"
    /> 
 </div>
 </a>

    </div>
   
  <DialogModel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Login Successful"
        message="Welcome! You are now logged in."
        action="Exit"
        bgColor="appColor"
      />
  
    </main>

  );
}

export default Home;





























// import { useContext } from "react";
// import NewArrivals from "./components/NewArrivals";
// import Banner from "./components/banner";
// import Banner2 from "./components/banner2";
// import Products from "./components/products";
// import { LiaTimesSolid } from "react-icons/lia";
// import "./index.css";
// import { CiLogin } from "react-icons/ci";
// import { FaRegRegistered } from "react-icons/fa6";
// import { CiHeart } from "react-icons/ci";
// import Defaultlayout from "./layout/Defaultlayout";
// import Cartcontext from "./cartcontext";
// import { Link } from "react-router-dom";
// import { MdContactPage } from "react-icons/md";
// import { RiProfileLine } from "react-icons/ri";
// function Home() {
//   const {
//     handleLogin,
//     handleRegister,
//     Back,
//     setIsOpen,
//     isOpen
//   } = useContext(Cartcontext);
//   console.log(isOpen)
//   return (
//     <main className="">
//    < Defaultlayout setIsOpen={setIsOpen} isOpen={isOpen} Back={Back}>
      
//       <div
//         className={`menu fixed z-[10000] top-0 
// xl:hidden md:hidden lg:hidden

//     bg-white p-2 w-1/3 h-full overflow-hidden transition-all duration-300
 
//     ${isOpen && window.innerWidth < 768 ? "left" : "left-0"}
//       ${
//         isOpen && window.innerWidth < 768
//           ? "translate-x-0"
//           : "-translate-x-full"
//       }
//   `}
//       >
//         <div className="mt-3 flex justify-between items-center ">
//           <div className="w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]">
//             <img src="Logo2.png" alt="" />
//           </div>
//           <div></div>

//           <p>
//             <LiaTimesSolid onClick={Back} />
//           </p>
//         </div>
//         <div className="mt-10 text-[#545353]">
//           <ul className="mt-20 ">
//            <li onClick={handleRegister}  className="flex items-center gap-1 mb-4 ">
//               {" "}
//               <span>
//                 <FaRegRegistered />
//               </span>
//              Register
//             </li>
           
//             <li onClick={handleLogin}  className="flex items-center gap-1 mb-4">
//               {" "}
//               <span>
//                 <CiLogin />
//               </span>
//               Login
//             </li>
//             {/* <li className="flex items-center gap-1 mb-4">
//               {" "}
//               <span>
//                 <CiHeart size={22} />
//               </span>
//             <Link to={"/whishlist"}>
//          <span>
//          Whislist
//          </span>
//             </Link>
//             </li> */}
//             <li className="flex items-center gap-1 mb-4">
//               {" "}
//               <span>
//               <MdContactPage />
//               </span>
//             <Link to={"/"}>
//          <span>
//          Contact
//          </span>
//             </Link>
//             </li>
//             <li className="flex items-center gap-1 mb-4">
//               {" "}
//               <span>
//               <RiProfileLine />
//               </span>
//             <Link to={"/"}>
//          <span>
//          About
//          </span>
//             </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <Banner />
//       <Products />
//       <Banner2 />
//       <NewArrivals />
//        </Defaultlayout >
//     </main>
//   );
// }

// export default Home;
// // ${
// //   isOpen && window.innerWidth >= 768 ? 'right-0' : '-right-full'
// // }
// // ${
// //   isOpen  && window.innerWidth >= 768 ?  "translate-x-0"  :"translate-x-full"
// // }
