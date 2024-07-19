import homepage from "../assets/PAGE-ACCUEIL 3000.jpg";
import "../styles/homepage.css";

function Homepage() {
  return (
    <section className="homepage">
      <h1>Elliot Masson</h1>
      <h2>ILLUSTRATION & DESIGN</h2>
      <img id="image-accueil" src={homepage} alt="dessins portfolio accueil" />
    </section>
  );
}

export default Homepage;
