import PropTypes from "prop-types"
import Cartcontext from "./cartcontext"
import { useEffect, useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import http from "./utils/adminHttp"

const Cartprovider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [cart, setCart] = useState([])
  const [product, setProduct] = useState([])
  const [cartNumber, setcartNumber] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [editObj, setEditobj] = useState({})
  const [login, setLogin] = useState(null)
  const [isadmin, setisadmin] = useState(null)
  const [user, setUser] = useState(null)
  const [producthistory, setProductHistory] = useState([])
  const [cartLength, setCartLength] = useState(0)
  const [wishlistLength, setWishlistLength] = useState(0)
  const [sessionId, setsessionId] = useState(localStorage.getItem("sessionId"))
  const [Userloading, setUserLoading] = useState(true)

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        const response = await http.get("/user/me")
        setUser(response.data.data)
        setisadmin(response.data.data.isAdmin)
        const history = localStorage.getItem("history")
        if (history) {
          try {
            setProductHistory(JSON.parse(history))
          } catch (parseError) {
            console.error("Failed to parse history:", parseError)
            setProductHistory([])
          }
        } else {
          setProductHistory([])
        }
        const sessionId = localStorage.getItem("sessionId")
        if (sessionId) {
          setsessionId(sessionId)
        } else {
          setsessionId(null)
        }
      }
    } catch (error) {
      console.error("Failed to load user", error)
    } finally {
      setUserLoading(false)
    }
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("Login")
    setLogin(isLoggedIn)
  }, [])

  const Back = () => {
    setIsOpen(false)
  }

  const handleLogin = () => {
    setOpenLogin(true)
  }
  const handleRegister = () => {
    setOpenRegister(true)
  }

  const Cartcont = {
    product: product,
    setProduct: setProduct,
    // theme: theme,
    // settheme: settheme,
    cart: cart,
    setCart: setCart,
    cartNumber: cartNumber,
    setcartNumber: setcartNumber,
    openLogin: openLogin,
    setOpenLogin: setOpenLogin,
    handleLogin: handleLogin,
    openRegister: openRegister,
    setOpenRegister: setOpenRegister,
    handleRegister: handleRegister,
    // addCart: addCart,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    Back: Back,
    openEdit: openEdit,
    setOpenEdit: setOpenEdit,
    editObj: editObj,
    setEditobj: setEditobj,
    login: login,
    setLogin: setLogin,
    isadmin: isadmin,
    setisadmin: setisadmin,
    user: user,
    producthistory,
    setProductHistory,
    cartLength,
    setCartLength,
    sessionId: sessionId,
    Userloading,
    loadUser,
    wishlistLength,
     setWishlistLength
  }

  return (
    <Cartcontext.Provider value={Cartcont}>{children}</Cartcontext.Provider>
  )
}
Cartprovider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Cartprovider
