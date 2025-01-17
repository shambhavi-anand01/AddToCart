import React from 'react';
import { Link } from 'react-router-dom';
import apple from './image/apple.jpg'
const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    brandWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    brand: {
      fontSize: '1.5rem',
      fontFamily: 'Roboto, sans-serif',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navItem: {
      margin: '0 10px',
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '1rem',
    }
}

function Navbar(){
    return(
      <nav style={styles.navbar}>
      <div style={styles.brandWrapper}>
      <img src={apple} alt="Logo" style={{width: '50px',      
      height: '50px',     
      borderRadius: '50%', 
      marginRight: '10px' }}></img>
      <h1 style={styles.brand}>Apple Store</h1>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        <li style={styles.navItem}><Link to="/cart" style={styles.navLink}>Cart</Link></li>
      </ul>
    </nav>

    )
}
export default Navbar