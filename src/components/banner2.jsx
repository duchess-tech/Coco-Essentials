// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Banner2 = () => {


  // const videoRef = useRef(null);

  // const handleMouseEnter = () => {
  //   videoRef.current.pause();
  // };

  // const handleMouseLeave = () => {
  //   videoRef.current.play();
  // };


  return (
    <div className="w-full appColor p-4">
         <div className="w-full flex justify-center">
          <img src="https://res.cloudinary.com/dz6yrbkai/image/upload/v1747174433/cocoEssentialsImages/cocogif2.gif" alt="" />
      {/* <video width="70%"
      className="xl:w-3/4 w-full"
            ref={videoRef} autoPlay loop muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <source src="/cocoVideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
     
    </div>
  );
};

export default Banner2;
