import { createContext } from "react";

//blueprint
//this is an object instance i.e a prototype
const Cartcontext = createContext({
    cart: [],
    setCart: {},
    // theme: {},
    // settheme: {},
    cartNumber:"",
    setcartNumber: {},
    // Total: {},
    // setTotal: {},
    // overallTotal: "",
    // setoverallTotal: ""
    setProduct:()=>{},
    product:[],
    LikeColor:[],
    setLikeColor:()=>{},
    openLogin:Boolean,
    setOpenLogin:()=>{},
    openRegister:Boolean,
    setOpenRegister:()=>{},
    handleLogin:()=>{},
    handleRegister:()=>{},
    addCart:()=>{},
    handleWishlist:()=>{},
    wishlistLnt:'',
    wishlist:[],
    removeWishItem:()=>{},
    isOpen:Boolean,
    setIsOpen:()=>{},
    Back:()=>{},
     openEdit:Boolean,
     setOpenEdit:()=>{},
     editObj:{},
     setEditobj:()=>{},
     login:Boolean,
     setLogin:()=>{},
    isadmin:null,
    setisadmin:()=>{},
    refreshToken: ()=>{},
    user:null,
    setUser:()=>{},
    producthistory:{},
    setProductHistory:()=>{},
    cartLength:Number,
    setCartLength:()=>{},
    sessionId:"",
    setsessionId:()=>{},
    Userloading:Boolean,
    loadUser:()=>{},
    isSideOpen:Boolean,
    wishlistLength:Number,
    setWishlistLength:()=>{}
})

export default Cartcontext


    