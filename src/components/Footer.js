import React from 'react';


function Footer() {
  return (
    <footer class="footer" >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ marginRight: '20px' }}>Made with joy</p>
        <a href="https://www.linkedin.com/in/sarahgjacobs/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <i className="fab fa-linkedin fa-3x" style={{ marginRight: "20px" }}></i>
        </a>
        <a href="https://github.com/sarahgjacobs" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
