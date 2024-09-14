import AboutUs from "./components/AboutUs";
import Articles from "./components/Articles";
import Courses from "./components/Courses";
import Landing from "./components/Landing";
import Popular from "./components/Popular";
import Presell from "./components/Presell";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Landing />
      <Courses />
      <AboutUs />
      <Popular />
      <Presell />
      <Articles />
    </>
  );
};

export default HomePage;
