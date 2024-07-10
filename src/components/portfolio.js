import project1 from "../assets/projects/Fracture.JPG";
import project3 from "../assets/projects/LUX.JPG";
import project4 from "../assets/projects/Megosphere.jpg";
import project5 from "../assets/projects/Nebula.jpg";
import project6 from "../assets/projects/Paulin-La vie est belle.jpg";
import project7 from "../assets/projects/Punching bag.jpg";
import project8 from "../assets/projects/Pur chaos.jpg";
import project9 from "../assets/projects/Sac.JPG";
import project10 from "../assets/projects/Serenity pearl.jpg";
import project11 from "../assets/projects/Slowmi.jpg";
import project12 from "../assets/projects/Tabouret IN OUT.jpg";
import project13 from "../assets/projects/Tense.jpg";

import "../styles/portfolio.css";

function Portfolio() {
  return (
    <section>
      <h3 id="design">DESIGN PORTFOLIO</h3>
      <p>
        Here are school projects and professional projects I have worked on:
      </p>

      <div class="gallery">
        <div class="photo-project">
          <img class="gallery-photo" src={project1} alt="" />
          <img class="gallery-photo" src={project3} alt="" />
          <img class="gallery-photo" src={project4} alt="" />
          <img class="gallery-photo" src={project5} alt="" />
          <img class="gallery-photo" src={project6} alt="" />
          <img class="gallery-photo" src={project7} alt="" />
          <img class="gallery-photo" src={project8} alt="" />
          <img class="gallery-photo" src={project9} alt="" />
          <img class="gallery-photo" src={project10} alt="" />
          <img class="gallery-photo" src={project11} alt="" />
          <img class="gallery-photo" src={project12} alt="" />
          <img class="gallery-photo" src={project13} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
