import Nav from "./nav.js";
import Homepage from "./homepage.js";
import Stylebar from "./stylebar.js";
import About from "./about.js";
import Portfolio from "./portfolio.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import "../styles/index.css";

import { Carousel } from "./carousel.js";
import carouselData from "../data/carouselData.json";

function App() {
  return (
    <div>
      <Nav />
      <div className="app-container">
        <Homepage />
        <Stylebar />
        <About />
        <Stylebar />
        <Portfolio />
        <Stylebar />
        <Carousel data={carouselData.slides} />
        <Stylebar />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
