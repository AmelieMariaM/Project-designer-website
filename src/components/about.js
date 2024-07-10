import "../styles/about.css";
import profilePicture from "../assets/received_237340725382197 (1).jpeg";
import CV from "../assets/CV-modele.pdf";

function About() {
  const openPdf = () => {
    window.open(CV);
  };
  return (
    <section>
      <h3 id="about">ABOUT</h3>

      <img
        className="profile-picture"
        src={profilePicture}
        alt="portrait of Elliot"
      />

      <div className="presentation">
        <p>
          My name is Elliot, I am a french designer and artist living in Paris.
          I have always been passionate about creation.
        </p>
        <p>
          In 2011 I joined the section "applied arts" in high school, had my
          baccalaureate with honors, then integrated in 2014 a school of design
          in Paris (Creapole) which I left with a degree in Art & Luxury Design,
          obtained with congratulations of the jury.
        </p>
        <p>
          I am passionate about life : colors, animals, humans, psychology,
          behaviors, texture... I mostly love creating in different fields :
          pattern design, graphic design, product design and I keep drawing and
          painting besides all that.
        </p>
      </div>
      <button className="btn btn-color-2" onClick={openPdf}>
        Download CV
      </button>
    </section>
  );
}

export default About;
