import React from 'react';
import '../styles/app.css';

function Header() {

  return (
    <header className="header">
      <h1>Welcome</h1>
      <Link to="/Home">
          {/* <img> Would be the logo on the top of the screen</img> */}
      </Link>
    </header>
  );
}

export default Header;