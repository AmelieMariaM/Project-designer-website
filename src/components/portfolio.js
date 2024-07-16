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
  const projects = [
    { src: project1, title: "Fracture" },
    { src: project3, title: "LUX" },
    { src: project4, title: "Megosphere" },
    { src: project5, title: "NEBULA" },
    { src: project6, title: "PAULIN - La vie est belle" },
    { src: project7, title: "Punching Bag" },
    { src: project8, title: "Pur Chaos" },
    { src: project9, title: "Sac" },
    { src: project10, title: "Serenity Pearl" },
    { src: project11, title: "Slowmi" },
    { src: project12, title: "Tabouret IN OUT" },
    { src: project13, title: "Tense" },
  ];

  return (
    <section>
      <h3 id="design">DESIGN PORTFOLIO</h3>
      <p>
        Here are school projects and professional projects I have worked on:
      </p>

      <div class="gallery">
        {projects.map((project, index) => (
          <div class="projects-list" key={index}>
            <img class="project" src={project.src} alt={project.title} />
            <div className="project-description">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
