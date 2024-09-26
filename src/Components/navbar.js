import * as React from 'react';
import "./navbar.css";
import Link from '@mui/material/Link';
import colors from './color';

const NavBar = ({ toggleNavBar }) => {

  return (
    <div id="navContainer">
      <Link href="/info" underline="none" style={{ color: `${colors.primary}` }}>
        <div className="navStyle">
          Info
        </div>
      </Link>
      <Link href="/itemList" underline="none" style={{ color: `${colors.primary}` }}>
        <div className="navStyle" onMouseOver={toggleNavBar}>
          Items
        </div>
      </Link>
      <Link href="/form" underline="none" style={{ color: `${colors.background}` }}>
        <div className="navStyle" style={{ backgroundColor: `${colors.primary}` }}>
          Form
        </div>
      </Link>
    </div>
  );
}

export default NavBar;