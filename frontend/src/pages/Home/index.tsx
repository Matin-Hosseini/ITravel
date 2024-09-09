import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Landing from "./components/Landing";
import Popular from "./components/Popular";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Landing />
      <Courses />
      <AboutUs />
      <Popular />
    </>
  );
};

export default HomePage;
