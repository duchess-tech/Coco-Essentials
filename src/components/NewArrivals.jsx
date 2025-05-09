import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import {  useContext, useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import httpAuth from "../utils/https";
import {  addItemToCart } from "../stores/features/cart/cartSlice";
import {addWishlist, deleteWishlist} from"../stores/features/whishlist/wishlistSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Truncate, formatPrice} from "../utils/utils"
import { FaHeart} from "react-icons/fa";
import { TfiMore } from "react-icons/tfi";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiLoaderCircle } from "react-icons/bi";
import cors from "cors"
import { LiaShoppingBagSolid } from "react-icons/lia";
import Cartcontext from "../cartcontext";
import { FaSpinner } from "react-icons/fa6";
cors()
function NewArrivals() {
  const flexContainerRef = useRef(null);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
const wishlists= useSelector((state)=>state?.wishlist.items);    
const [cartLoading, setCartLoading] = useState({})  
const [loading,setLoading]=useState(true)
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const{user,sessionId}=useContext(Cartcontext)
  const cartItems= useSelector((state)=>state?.cart.items); 

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true)
        const response = await httpAuth.get('/api/products/new-arrivals');
        const data = await response.data;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }finally{
        setLoading(false)
      }
    };

    fetchNewArrivals();
  }, []);

  const isProductInCart = (productId) => {
    const wish= cartItems.some((item) => item?.productId?._id === productId)
   return wish
  }

  const handleScroll = () => {
    const container = flexContainerRef.current;
    const scrollPosition = container.scrollLeft;
    setShowLeftIndicator(scrollPosition > 0);
  };

  const scrollLeft = () => {
    flexContainerRef.current.scrollBy({
      left: -100, 
      behavior: "smooth",
    });
  };


  const scrollRight = () => {
    flexContainerRef.current.scrollBy({
      left: 100, 
      behavior: "smooth",
    });
  };
  const handleAddToWishlist = (product) => {
    dispatch(addWishlist({ userId:user?._id, sessionId,productId:product?._id}));
  }
  const handleRemoveFromWishlist = (product) => {
    dispatch(deleteWishlist({ userId:user?._id, sessionId,productId:product?._id}));
  }


  const isProductInWishlist = (productId) => {
    if (Array.isArray(wishlists)) {
      return wishlists.some((item) => item?.productId?._id === productId);
    }
    return false;
    // const wish = wishlists.some(item => item.productId._id === productId)
    // return wish
  };
  
  //add to cart
  const handleAddToCart = async (product) => {
    setCartLoading((prevLoading) => ({ ...prevLoading, [product._id]: true }));
    try {
   const selectedQuantity =  1
   dispatch(addItemToCart({ userId:user?._id,sessionId,productId: product._id,quantity:selectedQuantity }))
    } catch (err) {
      console.log(err);
    } finally {
      setCartLoading((prevLoading) => ({ ...prevLoading, [product._id]: false }));
    }
  };


  return ( 
    <div className="xl:mt-24 ">

<div className={`font-bold text-3xl justify-center xl:mt-10 mt-6 xl:mb-0 mb-7 xl:gap-12 gap-6  items-center border-0 flex `}>
    <hr  className="text-black  xl:w-1/3  w-3/12"/>
<h4 className="xl:text-2xl text-lg ">
New Arrivals
</h4>
<hr  className="text-black xl:w-1/3   w-3/12"/>

</div>

     <div className="flex  justify-between xl:px-3 px-3">
     {showLeftIndicator && (
        <div className="  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full cursor-pointer "  onClick={scrollLeft}>
          <button className="scroll-left bg-red">
          <PiLessThanLight />
          </button>
        </div>
      )}

        <div className="cursor-pointer w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full  " onClick={scrollRight}>
          <button className="scroll-right" >
            <PiGreaterThanLight />
          </button>
        </div>

     </div>
      
      <div
        className="flex  justify-between xl:gap-24 gap-2 p-3 scroll "
        ref={flexContainerRef}
        onScroll={handleScroll}
      >
        
        
      {!loading &&products?.map((item,index) => (
            <div key={index} className="mb-10 newAriival ">
              <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
                <img src={item.image} className="w-full h-full" alt="Product Image" />
              
                {!isProductInWishlist(item?._id)? ( 
                  <CiHeart
                    size={22}
                    id={item?._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#080808]"
                    onClick={() => handleAddToWishlist(item)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    id={item?._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#891980]"
                    onClick={() => handleRemoveFromWishlist(item)}
                  />
                )}

              </div>
              <h3 className="text-sm">{Truncate(item?.name,20)}</h3>
              <p className="text-[12px]">{Truncate(item?.description,30)}</p>
              <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md"><span></span>{formatPrice(Number(item?.price))}</h4>
                </div>
              <h3 className="text-[12px]">{item?.category}</h3>

              <div className="flex justify-between mt-2">
               


                <button className="text-[12px]   border  px-3 rounded-md  bg-white border-[#891980] ">
             <Link  to={`/ProductDetails/${item?._id}`} className="flex items-end gap-2">
             More<TfiMore />
                </Link></button> 
                {/* <button
                     id={item._id}
                  className="border text-sm px-8 py-2 rounded-md  bg-[#891980]  border-[#891980] text-white hover:bg-pink-950"
                  onClick={()=>handleAddToCart(item)}
                >
                
              <LiaShoppingBagSolid size={20} />

                </button> */}
                      <button
                     id={item?._id}

                      className={`border text-sm px-8 py-2 rounded-md  bg-[#891980]  border-[#891980] text-white hover:bg-pink-950  ${isProductInCart(item._id)? "bg-[#C683EF] text-white":"hover:bg-pink-900 text-black hover:text-white"}`}
                      onClick={()=>handleAddToCart(item)}
                    >
                    {cartLoading [item?._id]==true? <FaSpinner className={` animate-spin  ${isProductInCart(item?._id)?"text-white hover:text-white":"hover:text-white"}`}/>:
              <LiaShoppingBagSolid size={20}  />
            }
                    </button>
              
              </div>
            </div>
          ))}  
          
            </div>
            {loading && <div className=" mb-32 text-2xl  flex items-center justify-center transition duration-300 ease-in-out transform ">
  
  <BiLoaderCircle className="animate-spin" />
  Loading...
            </div>}
            { !loading&&products?.length==0 && <div className=" bg-red-100 mb-32 text-md  flex items-center justify-center transition duration-300 ease-in-out transform ">
            No new Arrivals
            </div>}

    </div>
  )
}
export default NewArrivals;
