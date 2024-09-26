import colors from "./color";
import Link from '@mui/material/Link';
import "./navbarOpen.css";
import React from "react";

const NavBarOpen = ({ isVisible, toggleNavBar }) => {
    return (
        <div className={`nav-bar-open ${isVisible ? 'visible' : ''}`} style={{ color: `${colors.primary}` }}>
                <Link href="/headshot" underline="none" style={{ color: `${colors.primary}` }}>
                    Headshot
                </Link>
                <hr />
                <Link href="/waistUp" underline="none" style={{ color: `${colors.primary}` }}>
                    Waist Up
                </Link>
                <hr />
                <Link href="/fullBody" underline="none" style={{ color: `${colors.primary}` }}>
                    Full Body
                </Link>
                <hr />
                <Link href="/illustration" underline="none" style={{ color: `${colors.primary}` }}>
                    Illustration
                </Link>
            </div>
    )
}

export default NavBarOpen;