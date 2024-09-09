import "./index.css";
import { CiStar } from "react-icons/ci";
import courseImg from "../../assets/images/courses/fareelancer.png";

const CourseBox = () => {
  return (
    <div className="course-box">
      <a href="#">
        <img src={courseImg} alt="Course img" className="course-box__img" />
      </a>
      <div className="course-box__main">
        <a href="#" className="course-box__title">
          دوره پروژه محور متخصص جنگو
        </a>

        <div className="course-box__rating-teacher">
          <div className="course-box__teacher">
            <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <a href="#" className="course-box__teacher-link">
              رضا دولتی
            </a>
          </div>
          <div className="course-box__rating">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        </div>

        <div className="course-box__status">
          <div className="course-box__users">
            <i className="fas fa-users course-box__users-icon"></i>
            <span className="course-box__users-text">500</span>
          </div>
          <span className="course-box__price">1,000,000</span>
        </div>
      </div>

      <div className="course-box__footer">
        <a href="#" className="course-box__footer-link">
          مشاهده اطلاعات
          <i className="fas fa-arrow-left course-box__footer-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default CourseBox;
