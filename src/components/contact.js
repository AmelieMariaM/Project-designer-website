import "../styles/contact.css";

function Contact() {
  return (
    <section>
      <h3 id="contact">CONTACT</h3>

      <div class="infos">joselliotmasson@gmail.com</div>
      <div class="infos">Tel: 06.45.82.15.03</div>
      <div class="infos">
        49 avenue de la ferme des hézards 78112 Saint-Germain-en-Laye
      </div>

      <form
        id="form-group"
        action="https://formspree.io/f/xvgpoezj"
        method="POST"
      >
        <input
          class="input"
          type="text"
          name="name"
          placeholder="First Name"
          required
        />
        <input
          class="input"
          type="text"
          name="last name"
          placeholder="Last Name"
          required
        />
        <input
          class="input"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          class="input"
          type="text"
          name="object"
          placeholder="Title"
          required
        />
        <textarea
          class="text-area"
          name="message"
          rows="8"
          cols="40"
          placeholder="Your message..."
          required
        ></textarea>

        <button class="send btn-color-2">Send</button>

        {/* <!-- Créer pop up ? ou nouvel onglet ? --> */}
        {/* <p>Thank you! </p>
         */}
      </form>
    </section>
  );
}
export default Contact;
