import CourseBox from "../../../../components/CourseBox";
import "./index.css";

const Courses = () => {
  return (
    <div className="courses">
      <div className="container">
        <div className="courses-header">
          <div className="courses-header__right">
            <span className="courses-header__title title">
              جدیدترین دوره ها
            </span>
            <span className="courses-header__text">
              سکوی پرتاپ شما به سمت موفقیت
            </span>
          </div>
          <div className="courses-header__left">
            <a href="#" className="courses-header__link">
              تمامی دوره ها
              <i className="fas fa-arrow-left courses-header__icon"></i>
            </a>
          </div>
        </div>

        <div className="courses-content">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <CourseBox />
              </div>
              <div className="col-4">
                <CourseBox />
              </div>
              <div className="col-4">
                <CourseBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
