
import "../App.css"

const Banner = () => {


  // const  scrollDown = () => {
  //   window.scrollTo({
  //     top:550,
  //     behavior: 'smooth', // for smooth scrolling
  //   });
  // };
  return (
 
<div className="mt-20 bg-[#e4e5e0]">
  <div className="h-[520px] w-full flex  ">
    <div className="w-1/2 h-full  ">
    <video 
         autoPlay loop muted playsInline
         className="w-full h-full"
        >
        <source src="/cocoVideo3.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>

      
<img
        src="cocoModel4.png"
        alt="CocoBanner"
        className="  w-[500px] h-full "
      />
</div>

</div>


  )
}

export default Banner