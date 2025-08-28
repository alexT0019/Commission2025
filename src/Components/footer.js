import colors from "./color";
import "./footer.css";

export default function Footer(){
    return (
        <div id="footerContainer" style={{ backgroundColor: `${colors.primary}`, color: `${colors.background}` }}>
            <span>Copyright © 2025 moonblade. All rights reserved.</span>
        </div>
    )
}