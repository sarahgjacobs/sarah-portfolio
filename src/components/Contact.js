import React from 'react';

function Contact() {
  return (
    <section>
      <h1 className="connect">Let's connect: 👩🏻‍💻</h1>
      <div className="connect-fa">
        <a href="https://www.linkedin.com/in/sarahgjacobs/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-3x" style={{ marginRight: "20px" }}></i>
        </a>
        <a href="https://github.com/sarahgjacobs" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{ marginRight: "20px" }}></i>
        </a>
        <a href="mailto:sgjacobs14@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope fa-3x" style={{ marginRight: "20px" }}></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;

