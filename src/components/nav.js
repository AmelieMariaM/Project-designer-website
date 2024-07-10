import "../styles/nav.css";
import logo from "../assets/logo 100px-02.png";

function Nav() {
  return (
    <nav class="main-nav">
      <div>
        <img src={logo} alt="logo-Elliot" class="logo" />
      </div>
      <ul class="nav-list">
        <li>
          <a class="nav-link" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a class="nav-link" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a class="nav-link" href="#design">
            DESIGN
          </a>
        </li>
        <li>
          <a class="nav-link" href="#art">
            ILLUSTRATIONS & ART
          </a>
        </li>
        <li>
          <a class="nav-link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
