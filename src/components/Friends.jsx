import React from "react";
import moment from "moment";
import { FaRegCheckCircle } from "react-icons/fa";

const Friends = (props) => {
  const { fndInfo, msgInfo } = props.friend;
  const myId = props.myId;
  const { activeUser } = props;

  return (
    <div className="friend">
      <div className="friend-image">
        <div className="image">
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/api/chat/images/${fndInfo.photo}`}
            alt=""
          />
          {activeUser &&
          activeUser.length > 0 &&
          activeUser.some((u) => u.userId === fndInfo._id) ? (
            <div className="active_icon"></div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="friend-name-seen">
        <div className="friend-name">
          <h4
            className={
              msgInfo?.senderId !== myId &&
              msgInfo?.status !== undefined &&
              msgInfo.status !== "seen"
                ? "unseen_message Fd_name "
                : "Fd_name"
            }
          >
            {fndInfo.userName}
          </h4>

          <div className="msg-time">
            <span>
              {msgInfo
                ? moment(msgInfo.createdAt).startOf("mini").fromNow()
                : moment(fndInfo.createdAt).startOf("mini").fromNow()}
            </span>
          </div>
        </div>

        {myId === msgInfo?.senderId ? (
          <div className="seen-unseen-icon">
            {msgInfo.status === "seen" ? (
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/api/chat/images/${fndInfo.photo}`}
                alt=""
              />
            ) : msgInfo.status === "delivared" ? (
              <div className="delivared">
                {" "}
                <FaRegCheckCircle />{" "}
              </div>
            ) : (
              <div className="unseen"> </div>
            )}
          </div>
        ) : (
          <div className="seen-unseen-icon">
            {msgInfo?.status !== undefined && msgInfo?.status !== "seen" ? (
              <div className="seen-icon"> </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
