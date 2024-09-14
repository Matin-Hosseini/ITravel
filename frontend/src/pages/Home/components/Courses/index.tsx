import CourseBox from "../../../../components/CourseBox";
import SectionHeader from "../../../../components/SectionHeader";
import "./index.css";

const Courses = () => {
  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title="جدیدترین دوره ها"
          caption=" سکوی پرتاپ شما به سمت موفقیت"
          link={{ to: "/courses", title: "تمامی دوره ها" }}
        />

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
