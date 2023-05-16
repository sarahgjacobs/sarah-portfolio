import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const styles = {
      navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(227, 150, 252)',
        height: '80px',
        // padding: '0 50px',
        position: 'relative', // Add position relative for ::after pseudo-element
      },
      navLinks: {
        display: 'flex',
        listStyle: 'none',
      },
      navItem: {
        marginRight: '35px',
      },
      navLink: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
      },
      navLinkHover: {
        color: '#D8BFD8',
      },
      
      navbarBar: {
        content: '',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        backgroundColor: '#f5f5f5',
      },
    };
    return (
        <nav style={styles.navbar}>
            <h1 style={{ width: "100%", justifyContent: "center", backgroundcolor: 'rgb(227, 150, 252)' }}>Sarah Jacobs</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>About</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/projects" style={styles.navLink}>Projects</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>Contact</Link>
                </li>
            </ul>
            <div style={styles.navbarBar}></div>
        </nav>
    );
}

export default Navbar;
