import colors from "./color";
import "./footer.css";

export default function Footer(){
    return (
        <div id="footerContainer" style={{ backgroundColor: `${colors.primary}`, color: `${colors.background}` }}>
            <span>Copyright © 2024 baixuehuli. All rights reserved.</span>
        </div>
    )
}