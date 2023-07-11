import React from "react";
import "../App.css";
import Fetch from "../fetch";
import Avatar from "@mui/material/Avatar";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AttachFileTwoToneIcon from "@mui/icons-material/AttachFileTwoTone";

const headerRight = ({ nameLastSeen }) => {
  return (
    <div className="HeaderLeft">
      <div className="HeaderLeft">
        <div style={{ margin: "5px" }}>
          <Avatar alt="Remy Sharp" src="" />
        </div>
        <div>
          {console.log("heyyyy", nameLastSeen)}
          <h2 style={{ margin: 0, marginLeft: "20px" }}>
            {/* {nameLastSeen.class} */}
          </h2>
          <p style={{ margin: 0, marginLeft: "20px", fontSize: "10px" }}>
            {/* {nameLastSeen.time} */}
          </p>
        </div>
      </div>
      <div>
        <SearchSharpIcon />
        <AttachFileTwoToneIcon />
        <MoreVertSharpIcon />
      </div>
    </div>
  );
};
export default headerRight;
