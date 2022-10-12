import React from 'react';
import '../styles/app.css';

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
