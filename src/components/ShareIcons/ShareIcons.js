import "tachyons";
import './ShareIcons.css';
import {
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon
} from "react-share";
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton
} from "react-share";

const ShareIcons = ({size, round, borderRadius}) => {
    return (
        <div className="share-icons-container pt2">
            <FacebookShareButton
                url={window.location.href}
                quote={"Welcome to our blogging website, if you like it please do Subscribe"}
                hashtag="#Blogging"
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <FacebookIcon size={size} round={round} borderRadius={borderRadius}/>
            </FacebookShareButton>
            <WhatsappShareButton
                url={window.location.href}
                title={"Blogging Website"}
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <WhatsappIcon size={size} round={round}/>
            </WhatsappShareButton>
            <TwitterShareButton
                url={window.location.href}
                title={"Blogging Website"}
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <TwitterIcon size={size} round={round}/>
            </TwitterShareButton>
            <LinkedinShareButton
                url={window.location.href}
                title={"Blogging Website"}
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <LinkedinIcon size={size} round={round}/>
            </LinkedinShareButton>
            <RedditShareButton
                url={window.location.href}
                title={"Blogging Website"}
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <RedditIcon size={size} round={round}/>
            </RedditShareButton>
            <TelegramShareButton
                title={"Blogging Website"}
                url={window.location.href}
                disabled={false}
                windowWidth={"1900px"}
                windowHeight={"1080px"}
            >
                <TelegramIcon size={size} round={round}/>
            </TelegramShareButton>
        </div>
    );
}

export default ShareIcons;