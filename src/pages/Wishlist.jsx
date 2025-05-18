import { useDispatch, useSelector } from 'react-redux'
import { clearWishlist, deleteWishlist, fetchWishlists} from '../stores/features/whishlist/wishlistSlice'
import Defaultlayout from '../layout/Defaultlayout'
import {  addItemToCart} from "../stores/features/cart/cartSlice"
import { ToastContainer } from 'react-toastify'
import {Capitalize, Truncate, formatAmount} from '../utils/utils'
import HoverDescription from '../components/HoverDescription'
import { useContext, useEffect, useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import Cartcontext from '../cartcontext'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { CiCircleRemove } from 'react-icons/ci'
import { RiShoppingBagFill } from 'react-icons/ri'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



function Wishlist() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [loadRemoveWishlist, setLoadRemoveWishlist] = useState({})
  const [loadingEmptyWishlist, setLoadingEmptyWishlist] = useState(false)
  const wishlist = useSelector((state)=>state?.wishlist.items) 
const {user,sessionId,loadUser}=useContext(Cartcontext)
const userId=user?._id
const cartItems= useSelector((state)=>state?.cart.items) 


useEffect(()=>{
  loadUser() 
},[])


useEffect(() => {
  try{
        if (user?._id || sessionId) {
          dispatch(fetchWishlists({ userId: user?._id, sessionId }))
        }
      }catch(err){
    console.error(err)}

  }, [user,sessionId, dispatch])


 
  const isProductInCart = (product) => {
    if (!product || !product._id) return false;
    return cartItems?.some(item => item?._id && item?._id === product?._id);
  };

  const handleRemoveFromWishlist = async (itemId) => {
    setLoadRemoveWishlist(prevState => ({
      ...prevState,
      [itemId]: true
    }))
  
    try {
      await dispatch(deleteWishlist({ productId: itemId, sessionId, userId }))
    } finally {
      setLoadRemoveWishlist(prevState => ({
        ...prevState,
        [itemId]: false
      }))
    }
  }
  
  const handleAddToCart = (productId) => {
    dispatch(addItemToCart({ userId:user?._id,sessionId,productId,quantity:1 }))
    
  }

  const HandleEmptyAllwishlist = async () => {
    setLoadingEmptyWishlist(true) 
    
    const wishlistData = {
      userId: user ? user._id : null,
      sessionId: user ? null : sessionId,
    }
    
    try {
      await dispatch(clearWishlist(wishlistData))
    } finally {
      setLoadingEmptyWishlist(false) 
    }
  }
  

  const handleBack = () => {
    setIsOpen(!isOpen)
  }
  
  return (
   <Defaultlayout  setIsOpen={setIsOpen} isOpen={isOpen} Back={handleBack}>
     <div className='min-h-screen'>
      <div className='xl:mt-[90px] mt-44  md:mt-24 lg:mt-24'>
      { wishlist.length <=0 &&
      <h1 className='text-center text-xl w-full z-30 fixed top-24 bg-slate-100 p-3' >No  { wishlist.length ==1? "Wishlist":"Wishlists"} </h1>
    }

      </div>
      { wishlist.length <=0 &&
<div className='flex justify-center mt-52'>
  
<div className='w-1/2 h-[200px] border-2 rounded-lg  flex justify-center items-center'>
<h1 className='text-2xl'>Your Wishlist is empty</h1>
</div>
</div>

      }






     { wishlist?.length >=1 &&

<div>
<div className='flex flex-wrap justify-center gap-10 xl:w-3/4 w-full md:px-12 sm:p-4 m-auto mb-9 pt-2'>

{ wishlist?.length > 0 && wishlist?.map((item) => (
  <div key={item?.productId._id} className='  mt-20 xl:w-60  max-w-60 p-3 h-84   hover:border-white  border-2 rounded-lg relative group bg-whit shadow-lg '>
    <span className='text-sm '>{Capitalize(Truncate(item.productId?.name,30))}</span>
    <div className='xl:w-full  h-32 flex justify-center   mb-4 mt-6 overflow-hidden'>
    <img src={item?.productId?.image} alt="" className='w-32 h-full' />
    </div>
   
   <div className='flex justify-between items-center'>
   <button   id={item.productId?._id} className=' text-[13px] text-black ' onClick={()=>handleAddToCart(item.productId._id)}>
   {isProductInCart(item.productId?._id) ?<RiShoppingBagFill size={24}className="text-[#891980]" />: <LiaShoppingBagSolid size={24} className="text-[#891980]" />}

   </button>
   <div className="flex items-center border-2 p-2 rounded-sm ">
<TbCurrencyNaira /> 
<span  className=' text-[16px] '>{formatAmount(Number(item.productId?.price))}</span>
  </div>
    <button id={item._id}  disabled={loadRemoveWishlist[item.productId?._id]}  className=' text-[13px] hover:bg-red-600 hover:text-white ' onClick={() => handleRemoveFromWishlist(item.productId?._id)}>  
      {loadRemoveWishlist[item.productId?._id] ? (
    <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
  ) : (
    <CiCircleRemove size={24} />
  )} </button>
  <HoverDescription description={item.productId?.description}/>
   </div>
   
  </div>

))}   
  
</div>



     
<div className='flex justify-end mt-12 p-3'>
<button  className='bg-[#890104] w-[100px] text-white text-[13px] rounded-sm p-2'  disabled={loadingEmptyWishlist} onClick={HandleEmptyAllwishlist}> {loadingEmptyWishlist ? (
    <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
  ) : (
    "Clear Wishlist"
  )}</button>
  </div>
  </div>

     }
   
    </div>
   
  
   
    <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />
   </Defaultlayout>
  )
}

export default Wishlist
