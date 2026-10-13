import React from 'react'

function ContactTest() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <div className="container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>Feel free to contact me!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
  


    </div>
  )
}

export default ContactTest;