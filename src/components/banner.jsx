
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
 
<div className="xl:mt-20 mt-44 bg-[#e4e5e0] sm:mt-44 md:mt-24 bg-cover bg-center bg-no-repeat sm:bg-none bg-[url('cocoModel4.png')]"
>
  <div className="h-[520px] w-full xl:flex lg:flex md:flex sm:flex flex sm:justify-center justify-center  ">
    <div className="xl:w-3/5 xl:h-full xl:pl-24 sm:w-2/5 md:w-2/3 md:pl-12 w-full appColor h-1/5 mt-56">
    <video 
         autoPlay loop muted playsInline
         className="w-full xl:h-full h-full "
        >
        <source src="/cocoVideo3.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>

<div className=" xl:w-2/5 xl:flex justify-center p-2 hidden md:block ">
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