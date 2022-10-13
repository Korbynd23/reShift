import React from 'react';
import '../styles/app.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <h1>Welcome To the Header</h1>
      
      <Link to="/homeLogin">
          {/* <img> Would be the logo on the top of the screen</img> */}
      </Link>
    </header>
  );

}

export default Header;