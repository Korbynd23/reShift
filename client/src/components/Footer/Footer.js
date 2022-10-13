import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">
      <h1>Hi! I am the Footer! </h1>

      <Link to="/adminPage">
        <button className="">ADMIN</button>
      </Link>
    </footer>
  );
  
}

export default Footer;
