import Image from "next/image";
import { Burger } from "public";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "public";

const Banner = () => {
  return (
    <div className="banner py-10">
      <div className="container">
        <div className="">
          <div className="banner--show flex ">
            <div className="image w-full bg-center bg-no-repeat flex px-10">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper "
              >
                <SwiperSlide className="parent bg-slide1 flex flex-col items-center justify-center">
                  <div className="img">
                    <p className="z-8">Make every cooking easier</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="parent bg-slide2"></SwiperSlide>
                <SwiperSlide className="parent bg-slide3"></SwiperSlide>
                <SwiperSlide className="parent bg-slide4"></SwiperSlide>
                <SwiperSlide className="parent bg-slide5"></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
