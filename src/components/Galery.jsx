import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const images = ["/1.png", "/2.png", "/4.png", "/3.png", "/7.png", "/8.png"];

export default function Galery() {
  return (
    <div
      style={{ display: "flex", width: "100vw", justifyContent: "center" }}
      className="container"
    >
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ borderRadius: "14px", margin: "0 8%", maxWidth: "60vw" }}
        loop
      >
        {images.map((iten, index) => (
          <SwiperSlide
            key={index}
            style={{ overflow: "hidden", height: "320px" }}
          >
            <img src={iten} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
