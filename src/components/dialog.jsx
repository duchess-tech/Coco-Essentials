import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
export default function DialogModel({ isOpen, onClose, logout, title, message,action,loading,bgColor}) {

  
    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
  
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className= "w-full max-w-md bg-white rounded-xl p-6 shadow-xl">
            <div className="text-lg font-semibold">{title}</div>
            <div className="mt-2 text-gray-500"> 
              {message} 
            </div>

           <div className="flex justify-between">
           {action === 'Logout' && (
          <button
            onClick={logout}
            className={`${bgColor} flex gap-1 justify-center items-center text-white px-4 py-2 rounded hover:opacity-90`}
          >
            {action} {loading && <FaSpinner className="animate-spin" />}
          </button>
        )}
             
                <div className="mt-4 flex justify-end">
                <button
          onClick={onClose}
          className={` text-black bg-gray-300 flex gap-1 justify-center items-center  px-4 py-2 rounded `}
        //   className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Exit
        </button>     </div> 
           </div>
        
           
          </div>
        </div>
      </Dialog>
    );
  }
  DialogModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  logout: PropTypes.func,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  action: PropTypes.string,
  bgColor: PropTypes.string
};