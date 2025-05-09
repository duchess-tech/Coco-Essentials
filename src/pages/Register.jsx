import { useContext, useRef, useState } from "react";
import httpAuth from "../utils/https";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cartcontext from "../cartcontext";
import { FaSpinner } from "react-icons/fa";
const Register = () => {
  const fullnameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const phoneNumberRef = useRef('');

const{setOpenRegister,handleLogin}=useContext(Cartcontext)
const[loading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const formData = {
      fullname: fullnameRef.current.value,
      email: emailRef.current.value,
      phonenumber: phoneNumberRef.current.value,
      password: passwordRef.current.value,
      confirmpassword: confirmPasswordRef.current.value,
      
    };
     try {
      
      const res = await httpAuth.post("/api/user/register",formData,  { withCredentials: true });
      if(res.data.created){
        setOpenRegister(false)
        toast.success(res.data.message);
handleLogin()
      
        }
        else{
            if(res.data.created.error_type === 0){
                toast.error(res.data.error[0].msg);
                     }
                     else if (res.data.error_type === 1) {
                        toast.error(res.data.message);
                    }
        }
    } 
    catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  };

  const handleBack = () => {
    setOpenRegister(false);
  };
  const HandleLogin=()=>{
handleLogin()
setOpenRegister(false);

  }

  return (
    <div className="fixed inset-0 flex p-3 xl:p-0 items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
            <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />

      <form
        onSubmit={handleSubmit}
        className="forgot-password xl:w-1/3 lg:w-1/2 sm:w-full md:w-1/2  w-full  p-3 text-[12px]   rounded-lg shadow-md bg-white  transition duration-500 ease-in-out border-2 border-transparent "
      >
        <h2 className="text-center text-2xl mt-3 mb-3">Register</h2>

        <div className="mb-3">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            ref={fullnameRef}
            type="text"
            id="fullName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter fullname"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="mt-1 p-2 block w-full border  border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter email"
            required
          />
        </div>


        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            PhoneNumber
          </label>
          <input
            ref={phoneNumberRef}
            type="number"
            id="phonenumber"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter phonenumber"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirmPassword"
            className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter confirmPassword"
required
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-3 justify-center w-full mb-4  border border-gray-300 hover:text-white  hover:bg-[#891980] py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register
          {loading && <FaSpinner  className="animate-spin"/>}

        </button>
        <button
          onClick={handleBack}
          className="w-full text-[12px] bg-[#891980] hover:bg-[#891980] text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back
        </button>
      <div className="flex justify-end mt-2 text-[12px] ">
      <a onClick={HandleLogin} className="cursor-pointer">
        Login here</a> 
      </div>
      </form>
    </div>
  );
};



export default Register;
