import React from 'react';

function About() {
  return (
    <section>
      <h1>About Sarah Jacobs</h1>
      <div>
      <table>
        <h2>Languages & Tools</h2>
  <tr>
    <td>HTML</td>
    <td><i class="fab fa-html5"></i></td>
    <td>JavaScript</td>
    <td><i class="fab fa-js"></i></td>
    <td>CSS</td>
    <td><i class="fab fa-css3"></i></td>
  </tr>
  <tr>
    <td>Education</td>
    <td colspan="5">
      <ul>
        <li>Georgia Institute of Technology</li>
        <li>Georgia College & State University</li>
      </ul>
    </td>
  </tr>
</table>

        <h2>Education</h2>
        <h3>Georgia Tech Bootcamp</h3>
        <h6>This is where I'll put the info about GT</h6>
        <h3>Georgia College & State University</h3>
        <h6>BA in Communication with a concentration in Digital Media</h6>
      </div>
    </section>
  );
}

export default About;
