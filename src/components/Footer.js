import React from 'react';


function Footer() {
  return (
    <footer class="footer" >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ marginRight: '10px', fontSize: '16px', fontWeight: 'bold' }}>Made with joy by Sarah Jacobs 2023</p>
        <h6 style={{ marginRight: '15px' }}>||</h6>
        <a href="https://www.linkedin.com/in/sarahgjacobs/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <i className="fab fa-linkedin fa-2x" style={{ marginRight: "10px", width: '10px', height: '10px' }}></i>
        </a>
        <a href="https://github.com/sarahgjacobs" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
