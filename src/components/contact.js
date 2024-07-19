import "../styles/contact.css";

function Contact() {
  return (
    <section>
      <h3 id="contact">CONTACT</h3>

      <div className="infos">joselliotmasson@gmail.com</div>
      <div className="infos">Tel: 06.45.82.15.03</div>
      <div className="infos">
        49 avenue de la ferme des hézards 78112 Saint-Germain-en-Laye
      </div>

      <form
        id="form-group"
        action="https://formspree.io/f/xvgpoezj"
        method="POST"
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="First Name"
          required
        />
        <input
          className="input"
          type="text"
          name="last name"
          placeholder="Last Name"
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          className="input"
          type="text"
          name="object"
          placeholder="Title"
          required
        />
        <textarea
          className="text-area"
          name="message"
          rows="8"
          cols="40"
          placeholder="Your message..."
          required
        ></textarea>

        <button className="send btn-color-2">Send</button>
      </form>
    </section>
  );
}
export default Contact;
