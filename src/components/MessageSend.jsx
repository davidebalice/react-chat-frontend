import React from "react";
import {
  FaPlusCircle,
  FaFileImage,
  FaGift,
  FaPaperPlane,
} from "react-icons/fa";

const MessageSend = ({
  inputHendle,
  newMessage,
  sendMessage,
  emojiSend,
  ImageSend,
}) => {
  const emojis = [
    "😀",
    "😄",
    "😁",
    "😆",
    "😂",
    "🤣",
    "😊",
    "🙂",
    "🙃",
    "😉",
    "😍",
    "😝",
    "😜",
    "🧐",
    "🤓",
    "😎",
    "😕",
    "🤑",
    "🥴",
    "😱",
  ];

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <div className="message-send-section">
      <input type="checkbox" id="emoji" />

      <div className="file hover-image">
        <div className="add-image">Add Image</div>
        <input
          onChange={ImageSend}
          type="file"
          id="pic"
          className="form-control"
        />
        <label htmlFor="pic">
          <FaFileImage />
        </label>
      </div>

      <div className="message-type">
        <input
          type="text"
          onChange={inputHendle}
          onKeyPress={handleKeyPress}
          name="message"
          id="message"
          placeholder="Aa"
          className="form-control"
          value={newMessage}
        />
        <div className="file hover-gift">
          <label htmlFor="emoji"> 😄 </label>
        </div>
      </div>

      <div onClick={sendMessage} className="file">
        <FaPaperPlane />
      </div>

      <div className="emoji-section">
        <div className="emoji">
          {emojis.map((e) => (
            <span onClick={() => emojiSend(e)}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
