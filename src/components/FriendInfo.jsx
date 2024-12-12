import React from "react";

const FriendInfo = ({ currentfriend, activeUser, message }) => {
  return (
    <div className="friend-info">
      <input type="checkbox" id="gallery" />
      <div className="image-name">
        <div className="image">
          <img src={`./api/chat/images/${currentfriend.photo}`} alt="" />
        </div>
        {activeUser &&
        activeUser.length > 0 &&
        activeUser.some((u) => u.userId === currentfriend._id) ? (
          <div className="active-user">Active</div>
        ) : (
          ""
        )}

        <div className="name">
          <br />
          <h4>
            {currentfriend.name} {currentfriend.surname}
          </h4>
        </div>
      </div>

      <div className="gallery">
        {message && message.length > 0
          ? message.map(
              (m, index) =>
                m.message.photo && (
                  <img
                    key={index}
                    alt={`img${index}`}
                    src={`${process.env.REACT_APP_API_BASE_URL}/api/chat/images/${m.message.photo}`}
                  />
                )
            )
          : ""}
      </div>
    </div>
  );
};

export default FriendInfo;
