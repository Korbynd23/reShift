import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="header">

      <Link to="/">
        <h2 className='text-center logo'>-Logo-</h2>
      </Link>

    </header>
  );

}

export default Header;