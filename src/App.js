import './App.css';
import IconBg from './components/IconBg/IconBg';
import {FiFacebook} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";


import "tachyons";


function App() {
  return (
    <div className="flex flex-wrap">
      <IconBg icon={<FiFacebook size="4rem" className="bg-blue black shapeRoundedSquare iconStyling" />}  />
      <IconBg icon={<AiOutlineTwitter size="4rem" className="bg-green black shapeCircle iconStyling " />}  />
      <IconBg icon={<FaLinkedinIn size="4rem" className="bg-purple black shapeSquare iconStyling" />}  />
      <IconBg icon={<AiFillInstagram size="4rem" className="bg-yellow black shapeRoundedSquare iconStyling" />}  />
    </div>
  );
}

export default App;
