
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
 
<div className="xl:mt-20 mt-44 bg-[#e4ee0] sm:p-1 md:mt-24 "
>
  <div className="md:h-[500px] h-[500px] sm:max-h-full w-full xl:flex lg:flex md:flex    flex xl:justify-center justify-center   bg-cover bg-center  xl:bg-none bg-[url('https://res.cloudinary.com/dz6yrbkai/image/upload/v1747151905/cocoEssentialsImages/cocoModel.png')] ">
    <div className=" xl:h-full w-full flex justify-center   bg-[#e4e5e0]   sm:h-full h-32    md:mt-56  mt-56    lg:border-[#36053c] lg:border-[12px] lg:border-r-0">
      <img src="https://res.cloudinary.com/dz6yrbkai/image/upload/v1747173805/cocoEssentialsImages/cocogif.gif" alt="" />
    </div>

<div className=" md:w-2/5 xl:flex justify-center  sm:p-0  hidden lg:block border-t-[13px] border-b-[13px] border-r-[12px] border-[#36053c] ">
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