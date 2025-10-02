import { Element } from "react-scroll";
import About from "../component/layout/About";
import Education from "../component/layout/Education";
import Footer from "../component/layout/Footer";
import GetInTouch from "../component/layout/GetInTouch";
import Hero from "../component/layout/Hero";
import Skills from "../component/layout/Skills";
import Services from "../component/layout/Services";

const Home = () => {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="education">
        <Education />
      </Element>

      <Element name="getintouch">
        <GetInTouch />
      </Element>

      <Footer />
    </>
  );
};

export default Home;
