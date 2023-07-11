import React from "react";
import "../App.css";
import Fetch from "../fetch";
import Avatar from "@mui/material/Avatar";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";

const HeaderLeft = () => {
  return (
    <div className="HeaderLeft">
      <Avatar alt="Remy Sharp" src="" />
      <div className="HeaderLeft">
        <Avatar
          alt="Remy Sharp"
          src="https://cdn2.iconfinder.com/data/icons/ui-chat-app-1/32/24-status-update-1024.png"
        />
        <CommentSharpIcon />
        <MoreVertSharpIcon />
      </div>
    </div>
  );
};
export default HeaderLeft;
