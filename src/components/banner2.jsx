// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { useRef } from "react";

const Banner2 = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  // };

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.pause();
  };

  const handleMouseLeave = () => {
    videoRef.current.play();
  };


  return (
    <div className="w-full appColor p-4">
         <div className="w-full flex justify-center">
      <video width="70%"
      className="xl:w-3/4 w-full"
            ref={videoRef} autoPlay loop muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <source src="/cocoVideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      {/* <div className=" ">
        <Slider {...settings}>
          <div className="">
            <div
              className=" w-full  bg-cover bg-center flex justify-center items-center"
            >
              <img src="RadiantWhispersstoreBanner.png" alt="" className="" />
            </div>
          </div>
          <div>
          <div
              className=" w-full  bg-cover bg-center flex justify-center items-center"
            >
              <img src="RadiantWhispersstoreBanner.png" alt="" />
            </div>
          </div>
          <div>
          <div
              className=" w-full  bg-cover bg-center flex justify-center items-center"
            >
              <img src="RadiantWhispersstoreBanner.png" alt="" />
            </div>
          </div>
        </Slider>
      </div> */}
    </div>
  );
};

export default Banner2;
