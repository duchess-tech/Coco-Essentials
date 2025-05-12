
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
  <div className="md:h-[520px] w-full xl:flex lg:flex md:flex sm:flex flex sm:justify-center justify-center  ">
    <div className="xl:w-3/5 xl:h-full xl:pl-24 md:w-2/3 md:pl-12 w-full  sm:h-full h-1/5 mt-56 appColor">
    <video 
         autoPlay loop muted playsInline
         className="w-full  h-full "
        >
        <source src="/cocoVideo3.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>

<div className=" md:w-2/5 xl:flex justify-center p-2 sm:p-0 hidden md:block ">
<img
        src="cocoModel4.png"
        alt="CocoBanner"
        className="  w-[500px] h-full "
      />
</div>
      

</div> 

</div>


  )
}

export default Banner