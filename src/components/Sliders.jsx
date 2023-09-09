import React from "react";
import Slider from "react-slick";

export default function Sliders() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Slider {...settings}>
      {/* <div>
        <img
          src="https://images.unsplash.com/photo-1663499827419-726641d53ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="mx-auto h-50vh"
        />
      </div> */}
      <div className="max-h-96   ">
        <img
          src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt=""
          className=" max-h-[600px]  w-full object-contain"
        />
      </div>
      <div className="max-h-96 object-bottom " >
        
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Wireless/ssserene/AppleNPI/Aplus/r1805_r1595_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_05._CB595156976_.png"
            alt=""
            className="max-h-[600px]  w-full object-contain "/>
        
      </div>
      <div className="max-h-96 ">
        <img
          src="https://images.pexels.com/photos/986772/pexels-photo-986772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="max-h-[600px] w-full object-contain object-bottom"
        />
      </div>
    </Slider>
  );
}
