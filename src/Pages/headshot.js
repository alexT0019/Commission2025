import headshot from "../Images/headshot.jpg";
import "./item.css";
import colors from "../Components/color";

// import expand from "../Images/expand.svg";

export default function Headshot() {
    return(
        <div id="sectionContainer">
            <div>
                <img id="imageContainer" class="headshot" src={headshot} alt="headshot" />
                {/* <svg id="expand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#D3D4D7" d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg> */}
            </div>
            <div id="infoContainer">
                <h1 style={{ color: `${colors.primary}` }}>Headshot</h1>
                <ul>
                    <li class="infoText" style={{ color: `${colors.text}  ` }}>NTD. 500/US. 17 up</li>
                    <li class="infoText" style={{ color: `${colors.text}  ` }}>No background or coloured background</li>
                    <li class="infoText" style={{ color: `${colors.text}  ` }}>Scenery background
                    NTD. 650/US.21 up</li>
                </ul>
            </div>
            {/* Back to /itemList */}
            <a href="/itemList">
                <svg id="xmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#1A1B21" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </a>
            {/* Direct to previous or next */}
            <a href="/" >
                <svg style={{ display: "none" }} id="leftArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6FE0E7" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </a>
            <a href="/waistUp">
                <svg id="rightArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6FE0E7" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </a>
        </div>
    )
}