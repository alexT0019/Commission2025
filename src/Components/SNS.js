import "./SNS.css";

import pixiv from "../Images/pixiv.svg";
import plurk from "../Images/plurk.png";
import x from "../Images/x.svg";
import cara from "../Images/cara.svg";

export default function SNS() {
    return (
        <div>
            <span id="SNSContainer">
                <a href="https://www.pixiv.net/users/3829434" target="_blank" rel="noreferrer">
                    <img class="SNSIcon" src={pixiv} alt="pixiv" />
                </a>
                <a href="https://www.plurk.com/baixuehuli" target="_blank" rel="noreferrer">
                    <img class="SNSIcon" src={plurk} alt="plurk" />
                </a>
                <a href="https://twitter.com/baixuehuli" target="_blank" rel="noreferrer">
                    <img class="SNSIcon" src={x} alt="x" />
                </a>
                <a href="https://cara.app/baixuehuli" target="_blank" rel="noreferrer">
                    <img class="SNSIcon" src={cara} alt="cara" />
                </a>
            </span>
        </div>
    )
}