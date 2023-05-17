import React from 'react';
import resume from "../img/SJ_resume.docx";
import pdf from "../img/SJacobs_resume.pdf";



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
        <h2>I'm Sarah Jacobs, a <i>Software Engineer</i> based in Atlanta, GA. I have a strong background in communication, digital media, and leadership which I've combined with a Coding certification from Georgia Tech Bootcamps. Now I am <b>currently seeking roles</b> in the tech industry. Visit the 'About' page for my languages and education, the once you're done head over to the Projects tab to see them all in action!</h2>
        <br></br>
        <a href={pdf} download>
          <button className="download-button">Resume PDF</button>
        </a>
        <a href={resume} download>
          <button className="download-button">Resume Docx</button>
        </a>


        <br></br>

        <ul id="hobbies">
          <h3>In my free time I enjoy:</h3>
          <li>Learning Korean</li>
          <li>Writing Stories (<a href="https://sarahgjacobs.github.io/sarahjacobswrites/#">Check them out here</a>)</li>
          <li>Going for runs</li>
          <li>Reading (Currently reading: Memoirs of a Geisha by Arthur Golden and Clean Code by Robert Martin)</li>
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

