import React from 'react';
import resume from "../img/SJ_resume.docx";
import pdf from "../img/SJ_resume.pdf";
import { useEffect } from 'react';



function About() {
  //falling animation for page loading
  const showSecondSection = () => {
    const secondSection = document.getElementById('welcome-page');
    secondSection.style.display = 'block';
  }

  function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://sarahgjacobs.github.io/sarahjacobsdev/');
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return <>Will redirect in 3 seconds...</>;
  }

  RedirectExample()

  return (
    <section>
      <h1 id="falling-welcome" onAnimationEnd={showSecondSection}></h1>

      <section id="welcome-page">
      <a target='_blank'
            rel='noopener noreferrer' href="https://sarahgjacobs.github.io/sarahjacobsdev/">Portfolio</a>
   
        <h1 id="port"> <button id='port-button'><a href="https://sarahgjacobs.github.io/sarahjacobsdev/" className='new-port' id='port-button'>Click here for my newest portfolio</a></button></h1>
        <h2>Hello, I'm Sarah Jacobs, a Software Developer based in Atlanta, GA, 
          on a mission to blend the best of tech and creativity. With a knack 
          for communication, a love for digital media, and a dash of teaching experience, 
          I've infused my skills with a Coding certification from Georgia Tech 
          Bootcamps. Now, I'm on the hunt for exciting opportunities in the tech 
          world. Curious to know more? Swing by the 'About' page to discover my 
          newest websites!</h2>
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
        
      </section>

    </section>
  );
}

export default About;

