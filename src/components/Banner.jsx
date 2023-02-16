import Image from "next/image";
import { Burger } from "public";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "public";

const Banner = () => {
  return (
    <div className="banner" style={{ height: "60vh" }}>
      <div className="px-mainP py-10">
        <div className="banner--show flex ">
          <div className="imag w-60 bg-center bg-no-repeat flex px-10">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper text-center"
            >
              <SwiperSlide className="parent">
                <Image src={Slide1} alt="Slide 1" className="child" />
              </SwiperSlide>
              <SwiperSlide className="parent">
                <Image src={Slide2} alt="Slide 1" className="child" />
              </SwiperSlide>
              <SwiperSlide className="parent">
                <Image src={Slide3} alt="Slide 1" className="child" />
              </SwiperSlide>
              <SwiperSlide className="parent">
                <Image src={Slide4} alt="Slide 1" className="child" />
              </SwiperSlide>
              <SwiperSlide className="parent">
                <Image src={Slide5} alt="Slide 1" className="child" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="bg-dirty w-30 rounded-3xl mx-auto self-end flex justify-center">
            <div className="text-center">
              <Image src={Burger} alt="Burger" className=" -mt-10" />
              <span>50% off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
