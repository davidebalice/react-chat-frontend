import React from "react";
import FriendInfo from "./FriendInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";
import { useDispatch, useSelector } from "react-redux";
import { IoCaretBack } from "react-icons/io5";

const RightSide = (props) => {
  const dispatch = useDispatch();
  const {
    currentfriend,
    inputHendle,
    newMessage,
    sendMessage,
    message,
    scrollRef,
    emojiSend,
    ImageSend,
    activeUser,
    typingMessage,
  } = props;

  const { page } = useSelector((state) => state.messenger);

  const back = () => {
    dispatch({
      type: "PAGE_FRIENDS",
      payload: {
        page: false,
      },
    });
  };

  return (
    <div className={`col-9 column0 ${page ? "" : "hiddenOnMobile"}`}>
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8 column2">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div onClick={back} className="backButton">
                    <IoCaretBack />
                  </div>
                  <div className="image">
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}/api/chat/images/${currentfriend.photo}`}
                      alt=""
                    />

                    {activeUser &&
                    activeUser.length > 0 &&
                    activeUser.some((u) => u.userId === currentfriend._id) ? (
                      <div className="active-icon"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="name">
                    <h3>{currentfriend.userName}</h3>
                  </div>
                </div>
              </div>

              <Message
                message={message}
                currentfriend={currentfriend}
                scrollRef={scrollRef}
                typingMessage={typingMessage}
              />

              <MessageSend
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                emojiSend={emojiSend}
                ImageSend={ImageSend}
              />
            </div>
          </div>

          <div className="col-2 column3">
            <FriendInfo
              message={message}
              currentfriend={currentfriend}
              activeUser={activeUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
