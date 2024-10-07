import React, { useContext, useState } from "react";
import "./sideBar.css";
import { assets } from "./../../assets/assets";
import { Conetext } from "../../context/Context";
import { RxCross1 } from "react-icons/rx";

const SideBar = () => {
  const [extented, setExtented] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } =
    useContext(Conetext);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sideBar">
      <div className="top">
        {!extented ? (
          <img
            src={assets.menu_icon}
            alt=""
            className="menu"
            onClick={() => setExtented(!extented)}
          />
        ) : (
          <img
            src={assets.cross_icon}
            alt=""
            className="menu2"
            onClick={() => setExtented(!extented)}
          />
        )}

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompts.map((item, i) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={i}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div> */}
    </div>
  );
};

export default SideBar;
