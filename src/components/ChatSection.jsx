import { useContext } from "react";
import Cam from "../img/video-camera.png";
import Add from "../img/add-user.png";
import More from "../img/menu.png";
import MessageSection from "./MessageSection";
import InputPanel from '../components/InputPanel'
import { ChatContext } from "../context/ChatContext";

const ChatSection = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <MessageSection />
      <InputPanel />
    </div>
  );
};

export default ChatSection;
