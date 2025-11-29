import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderHome() {
  const desktopImages = [
    "images/banner1.png",
    "images/banner3.png"
  ];

  const mobileImages = [
    "images/veticalposter3.png",
    "images/veticalposter4.png",
    "images/veticalposter1.jpg",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="slider-container" style={{ width: "100%", height: "100vh" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        style={{
          borderRadius: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} style={{ height: "100vh" }}>
            <img
              src={img}
              alt="banner"
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHome;
