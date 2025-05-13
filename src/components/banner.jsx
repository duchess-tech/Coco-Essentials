
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
 
<div className="xl:mt-20 mt-44 bg-[#e4ee0] sm:p-12 md:mt-24 "
>
  <div className="md:h-[420px] h-[500px] w-full xl:flex lg:flex md:flex sm:flex flex sm:justify-center justify-center   bg-cover bg-center  md:bg-none bg-[url('cocoModel1.png')] ">
    <div className="md:w-3/5 xl:h-full w-full flex justify-center   bg-[#e4e5e0]   sm:h-full h-32    md:mt-56 sm:mt-0 mt-56   sm:border-[#36053c] sm:border-[12px] sm:border-r-0">
   
      <img src="https://res.cloudinary.com/dz6yrbkai/image/upload/v1747173805/cocoEssentialsImages/cocogif.gif" alt="" />
    </div>

<div className=" md:w-2/5 xl:flex justify-center  sm:p-0  hidden md:block border-t-[13px] border-b-[13px] border-r-[12px] border-[#36053c] ">
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