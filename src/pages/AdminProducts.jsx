
import { useContext, useEffect, useState } from "react";
import httpAuth from "../utils/https";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/loaderSpinner";
import { CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../stores/features/product/productSlice";
import AdminDefaultlayout from "../layout/AdminLayout";
import EditProduct from "../components/editProducts";
import Cartcontext from "../cartcontext";
import DeleteProduct from "../components/deleteModal";
import { Truncate, formatPrice } from "../utils/utils";
import { TbCurrencyNaira } from "react-icons/tb";

function AdminProducts() {
  const [loading, setLoading] = useState(false);
  const{openEdit,setOpenEdit,setEditobj}=useContext(Cartcontext)
  const [moreLoading, setMoreLoading] = useState(false);
  const products = useSelector((state) => state.products);
  const [visibleProducts, setVisibleProducts] = useState(20);
  const [openDelete,setOpenDelete]=useState(false)
  const[ deleteName, setDeleteName]=useState({name:"",id:""}) 
  const dispatch = useDispatch();

 

  const handleAllProducts = async () => {
    try {
      setLoading(true);
      const response = await httpAuth.get(`/api/products/allProducts`);
      const data = await response.data.products;
      
      return data;
    } catch (error) {
      console.log(error);
      return []
    } finally {
      setLoading(false);
      setMoreLoading(false);
    }
  };

  useEffect(() => {
    handleAllProducts().then((products) => {
      dispatch(setProducts(products));
    });
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
  };

  //edit product
 const handleEdit=async(id)=>{
 

    try {
        const response = await httpAuth.get(`/api/products/edit/${id}`);
        const data = await response.data.product;
        setEditobj(data) 
   } catch (error) {
        console.log(error);
      } finally {
        setOpenEdit(true)
      }
  }

const openDeleteModal=(name,id)=>{
    setOpenDelete(true)
   setDeleteName({name,id})
}


const closeDeleteModal = () => {
  setOpenDelete(false);
  setDeleteName({ name: '', id: '' });
};

  return (
    <AdminDefaultlayout>
    {openEdit &&  <EditProduct setOpenEdit={setOpenEdit} />}
     {openDelete  &&<DeleteProduct deleteName={deleteName} closeDeleteModal={closeDeleteModal}   setOpenDelete={  setOpenDelete}/>}
    <main className="mb-10 xl:mt-24 lg:mt-44 md:mt-32 sm:mt-84 mt-40 appColor text-white"
    >
      {loading && <LoadingSpinner />}
      <div className="xl:w-4/5 w-full   mx-auto  lg:p-4 md:p-5">
        <div className=" flex  w-full sm:gap-5 flex-wrap  sm:flex-wrap justify-evenly   xl:justify-center  2xl:justify-evenly ">
          {products.slice(0, visibleProducts).map((prod) => (
            <div key={prod._id} className=" mb-20 max-w-48 xl:w-48  h-84  ">
  
              <div className="  w-full h-52 shadow-xl  overflow-hidden  border-2 rounded-lg mb-3 relative">
              {
  prod.noofitem === 0 &&
  (<div className={` border p-1 rounded-l-lg  absolute   cursor-pointer shadow-xl  text-[10px] text-red-500 flex justify-center items-center  bg-red-300 `}>Out of stock </div>)
}
                <img src={prod?.image} className="w-full h-full" alt="" />
              </div>
  
  
              <div className="p-1 ">
                <h3 className="text-[13px]">{Truncate(prod?.name,23)}</h3>
                <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md"><span></span>  {formatPrice(Number(prod?.price))}</h4>
                </div>
              </div>
              <div className="flex justify-between  ">
                <div className="justify-center flex ">
                  <button onClick={()=>openDeleteModal(prod?.name,prod?._id)} className="text-[12px]  border  px-6 rounded-md text-white p-2 bg-pink-700 ">
                   Delete
                  </button>
                </div>
                <button
                  id={prod._id}
                  className="border text-sm px-6 rounded-md  appColor border-pink-600 text-white hover:bg-pink-950"
                  onClick={() => handleEdit(prod?._id)}
                >
                Edit 
                </button>
              </div>
            </div>
          ))}
        </div>
        {moreLoading && (
          <div className="flex flex-col items-center justify-center h-screen">
            <CircularProgress
              size={80}
              style={{ marginBottom: 20, color: "#F13DA6" }}
            />
            <Typography
              variant="h6"
              className="text-pink-700 text-xl absolute "
              style={{ textAlign: "center" }}
            >
              Radiantwhispersstore products...
            </Typography>
          </div>
        )}
        <div className="m-auto w-44">
          {!loading && visibleProducts < products.length && (
            <button
              onClick={handleLoadMore}
              className="w-52 border p-2 rounded-xl appColor3 text-white font-bold"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
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
    </main>
    </AdminDefaultlayout>
    
  );
}

export default AdminProducts;
