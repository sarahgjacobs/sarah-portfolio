import React from 'react';
import { Link } from 'react-router-dom';





function About() {
  const showSecondSection = () => {
    const secondSection = document.getElementById('welcome-page');
    secondSection.style.display = 'block';
  }

  return (
    <section>
      <h1 id="falling-welcome" onAnimationEnd={showSecondSection}></h1>

      <section id="welcome-page">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a web developer based in [Location]. I love creating beautiful and functional websites that make a difference.</p>
        <div>
          <h2>Education</h2>
          <h3>Georgia Tech Bootcamp</h3>
          <h6>This is where I'll put the info about GT</h6>
          <h3>Georgia College & State University</h3>
          <h6>BA in Communication with a concentration in Digital Media</h6>
        </div>
      </section>

    </section>
  );
}

export default About;

