import React from "react";

const ActiveFriend = ({ user, setCurrentFriend }) => {
  return (
    <div
      onClick={() =>
        setCurrentFriend({
          _id: user.userInfo.id,
          email: user.userInfo.email,
          photo: user.userInfo.photo,
          userName: user.userInfo.userName,
        })
      }
      className="active-friend"
    >
      <div className="image-active-icon">
        <div className="image">
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${user.userInfo.photo}`}
            alt=""
          />
          <div className="active-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFriend;
