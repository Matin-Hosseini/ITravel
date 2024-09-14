import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CourseBox from "../../../../components/CourseBox";

const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Presell = () => {
  return (
    <div className="presell">
      <div className="container">
        <div className="presell__header">
          <span className="presell__title title">دوره های در حال پیش فروش</span>
        </div>

        <div className="presell__slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {courses.map((course) => (
              <SwiperSlide key={course}>
                <CourseBox />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Presell;
