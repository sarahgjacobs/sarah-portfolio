import React from 'react';
import { Link } from 'react-router-dom';





function About() {
  return (
    <section>
      <h1 id="falling-welcome">Welcome to my portfolio!</h1>
      <button id="falling-button" class="button">
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
      </button>

    </section>
  );
}

export default About;

