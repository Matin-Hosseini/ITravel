import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Landing from "./components/Landing";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Landing />
      <Courses />
      <AboutUs />
    </>
  );
};

export default HomePage;
