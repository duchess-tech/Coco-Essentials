
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
 
<div className="xl:mt-20 mt-44 bg-[#e4e5e0] sm:p-12 md:mt-24 bg-cover bg-center bg-no-repeat  md:bg-none bg-[url('cocoModel4.png')]"
>
  <div className="md:h-[420px] w-full xl:flex lg:flex md:flex sm:flex flex sm:justify-center justify-center  ">
    <div className="md:w-3/5 xl:h-full w-full  sm:h-full h-[120px] mt-56 sm:mt-0 border-[#36053c] border-[12px] border-r-0">
    {/* <video 
         autoPlay loop muted playsInline
         className="w-full  h-full "
        >
        <source src="https://res.cloudinary.com/dz6yrbkai/video/upload/v1747151979/cocoEssentialsImages/cocovideo1.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video> */}
    </div>

<div className=" md:w-2/5 xl:flex justify-center p-2 sm:p-0  hidden md:block border-t-[13px] border-b-[13px] border-r-[12px] border-[#36053c] ">
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