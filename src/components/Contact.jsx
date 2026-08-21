import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
  event.preventDefault();

  console.log(name);
  console.log(email);
  console.log(message);

  setSubmitted(true);
}

  return (
   <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={function (event) {
            setMessage(event.target.value);
          }}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      {submitted && <p>✅ Message sent successfully!</p>}
    </section>
  );
}

export default Contact;