import illustration from "../Images/illustration.jpg";
import "./landing.css";
import colors from "../Components/color";
import pixiv from "../Images/pixiv.svg";
import plurk from "../Images/plurk.png";
import x from "../Images/x.svg";
import cara from "../Images/cara.svg";
import { Link } from "react-router-dom";


export default function Landing() {
    return (
        <div>
            <div id="landingPicContainer">
                <img id="landingPic" src={illustration} alt="landing"></img>
                <span id="landingText1" style={{ 
                    color: colors.background, 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`, 
                    animation: 'fadeIn 0.5s ease-in-out forwards' }}>
                        Welcome to
                </span>
                <span id="landingText2" style={{ 
                    color: colors.background, 
                    backgroundColor: colors.primary, 
                    animation: 'fadeIn 0.5s ease-in-out 0.5s forwards'}}>
                        <span style={{ fontSize: "40px" }}>Moonblade</span>
                         's commission site
                </span>
                <button id="landingText3" style={{ 
                    color: colors.background, 
                    // background: `linear-gradient(to right, ${colors.accent}, ${colors.primary})`, 
                    animation: 'fadeIn80 1s ease-in-out 2s forwards' }}>
                        Enter Site {">"}
                        <Link className="linkStyle" to="/itemList"></Link>
                </button>
            </div>

            <div id="landingSNSIconContainer" style={{ backgroundColor: colors.secondary }}>
                <div id="landingSNSIconContainer2">
                    <a href="https://www.pixiv.net/users/3829434" target="_blank" rel="noreferrer">
                        <img class="SNSIcon" src={pixiv} alt="pixiv" />
                    </a>
                    <a href="https://www.plurk.com/moonblade0019" target="_blank" rel="noreferrer">
                        <img class="SNSIcon" src={plurk} alt="plurk" />
                    </a>
                    <a href="https://x.com/moonblade0019" target="_blank" rel="noreferrer">
                        <img class="SNSIcon" src={x} alt="x" />
                    </a>
                    <a href="https://cara.app/moonblade0019" target="_blank" rel="noreferrer">
                        <img class="SNSIcon" src={cara} alt="cara" />
                    </a>
                </div>
            </div>
        </div>
    )
}