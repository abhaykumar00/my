import React, { useEffect } from "react";
import { useState } from "react";
import Fetch from "./fetch";
import "./App.css";
import ChatLive from "./container/ChatLive";
import ChatNames from "./container/ChatNames";
import HeaderLeft from "./container/HeaderLeft";
import HeaderRight from "./container/HeaderRight";

function App() {
  const [nameLastSeen, setNameLastSeen] = useState({
    class: "",
    name: "",
    time: "",
  });
  const [id, setId] = useState("");

  return (
    <div className="container">
      <div className="part part1">
        <HeaderLeft />
      </div>
      <div className="part part2">
        <HeaderRight nameLastSeen={nameLastSeen} />
      </div>
      <div className="part part3">
        <ChatNames setId={setId} />
      </div>
      <div className="part part4">
        <ChatLive id={id} setNameLastSeen={setNameLastSeen} />
      </div>
    </div>
  );
}

export default App;
