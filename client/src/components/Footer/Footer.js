import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer text-center">

      <Link to="/adminPage">
        <button className="btn btn-warning">ADMIN</button>
      </Link>
      
    </footer>
  );
  
}

export default Footer;
