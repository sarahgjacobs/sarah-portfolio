import React from 'react';


function About() {
  const showSecondSection = () => {
    const secondSection = document.getElementById('welcome-page');
    secondSection.style.display = 'block';
  }

  return (
    <section>
      <h1 id="falling-welcome" onAnimationEnd={showSecondSection}></h1>

      <section id="welcome-page">
        <h1 id="port">Welcome to My Portfolio!</h1>
        <h2>I'm Sarah Jacobs, a <i>Software Engineer</i> based in Atlanta, GA. I have a strong background in communication, digital media, and leadership which I've combined with a Coding certification from Georgia Tech Bootcamps. Now I am currently seeking roles in the tech industry ranging from Development to Databases. See more of my experience and languages, then head over to the Projects tab to see it all in action.</h2>
        <br></br>
        
        <ul id="hobbies">
        <h3>In my free time I enjoy:</h3>
          <li>Learning Korean</li>
          <li>Writing Stories</li>
          <li>Going for runs</li>
          <li>Reading (Currently reading: Clean Code by Robert Martin)</li>
          <li>Playing video games with friends</li>
        </ul>
        {/* <div id="picture-container">
          <img src="../img/profilepic.jpg" alt="Profile picture" />
          
        </div> */}
      </section>

    </section>
  );
}

export default About;

