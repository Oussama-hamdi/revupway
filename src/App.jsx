import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OurTeam from "./components/OurTeam/OurTeam";
import Services from "./components/Services/Services";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 100,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <OurTeam />
      <Contact />
    </>
  );
}

export default App;

// revupway.surge.sh
