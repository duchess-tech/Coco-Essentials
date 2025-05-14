
import "../App.css"

const Banner = () => {


  // const  scrollDown = () => {
  //   window.scrollTo({
  //     top:550,
  //     behavior: 'smooth', // for smooth scrolling
  //   });
  // };
  // bg-[#e4e5e0]
  return (
 
<div className="mt-44 md:mt-32 md:mb-12  bg-[#e4ee0] sm:p-1  "
>
  <div className="sm:h-[700px] h-[500px] md:h-[400px] lg:h-[550px]  w-full flex xl:justify-center justify-center bg-cover bg-center  md:bg-none bg-[url('https://res.cloudinary.com/dz6yrbkai/image/upload/v1747151905/cocoEssentialsImages/cocoModel.png')] ">
    <div className=" md:h-full w-full flex justify-center bg-[#e4e5e0] h-32 mt-56 md:mt-0   md:border-[#36053c] md:border-[12px] md:border-r-0">
      <img src="https://res.cloudinary.com/dz6yrbkai/image/upload/v1747173805/cocoEssentialsImages/cocogif.gif" alt="" />
    </div>

<div className=" md:w-1/2 lg:w-1/2 xl:w-3/5 xl:flex justify-center bg-[#e4e5e0]  sm:p-0  hidden md:block border-t-[13px] border-b-[13px] border-r-[12px] border-[#36053c] ">
<img
        src="cocoModel1.png"
        alt="CocoBanner"
        className="  w-[500px] h-full "
      />
</div>
      

</div> 

</div>


  )
}

export default Banner