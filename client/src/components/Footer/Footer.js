import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <header className="header">

      <Link to="/adminLogin">
        <h1 className='text-center'>Admin</h1>
      </Link>

    </header>
  );

}

export default Footer;