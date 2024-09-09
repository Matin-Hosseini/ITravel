import CourseBox from "../../../../components/CourseBox";
import "./index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__header">
          <span className="popular__title title">محبوب ترین دوره ها</span>
        </div>

        <div className="popular__slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(10).keys()].map((item) => (
              <SwiperSlide key={item}>
                <CourseBox />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;
