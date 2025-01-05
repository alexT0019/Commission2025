import "./item.css";
import colors from "../Components/color";

// import expand from "../Images/expand.svg";
import ImageGallery from "react-image-gallery";

//Function to import all files in the folder at once
function getStaticImages() {
    const images = [];
    const importAll = (r) => r.keys().map(r);
    
    // Adjust the path to match your folder structure
    const imageFiles = importAll(require.context('../Images/illustration', false, /\.(png|jpe?g|svg)$/));
    
    for (let i = 0; i < imageFiles.length; i++) {
        images.push({
            original: imageFiles[i],
            thumbnail: imageFiles[i],
            originalHeight: '850px',
            thumbnailHeight: '52px',
        });
    }

    return images;
}

export default function Illustation() {
    return(
        <div id="sectionContainer">
            <div id="imageContainer">
                <ImageGallery items={getStaticImages()} />
            </div>
            <div id="infoContainer">
                <h1 style={{ color: `${colors.primary}` }}>Illustration</h1>
                <ul>
                    <li class="infoText" style={{ color: `${colors.text}  ` }}>NTD. 1500/US. 48 up</li>
                    <li class="infoText" style={{ color: `${colors.text}  ` }}>Price varied with complexity of character and background</li>
                </ul>
            </div>
            {/* Back to /itemList */}
            <a href="/itemList">
                <svg id="xmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#1A1B21" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </a>
            {/* Direct to previous or next */}
            <a href="/fullBody" >
                <svg id="leftArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6FE0E7" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </a>
            <a href="/">
                <svg style={{ display: "none" }} id="rightArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#6FE0E7" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </a>
        </div>
    )
}