import React from "react";
import "../App.css";
import Fetch from "../fetch";
import { useState } from "react";
import firestore from "../firebase";
import SentimentSatisfiedTwoToneIcon from "@mui/icons-material/SentimentSatisfiedTwoTone";
import MicTwoToneIcon from "@mui/icons-material/MicTwoTone";
const ChatLive = ({ id, setNameLastSeen }) => {
  const [input, setInput] = useState();

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const [myInputMessage, setMyInputMessage] = useState();
  const [fieldValue, setFieldValue] = useState({
    message: [],
  });
  // console.log(id); edit again this
  const f = async () => {
    try {
      // console.log("id", id); see again
      const docRef = await firestore.collection("names").doc(id);
      const docSnapshot = await docRef.get();
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        setFieldValue(data);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error fetching document from Firestore: ", error);
    }
  };

  f();

  function lastseen() {
    setNameLastSeen(fieldValue.message[fieldValue.message.length - 1]);
  }

  function handlemessageSubmit() {
    const currentDate = new Date();
    const a = currentDate.toString();
    const b = a.indexOf("GMT");
    const c = a.substring(0, b + 3);

    const setFirestoreValue = async () => {
      try {
        const docRef = firestore.collection("names").doc(id);
        await docRef.update({
          message: [
            ...fieldValue.message,
            {
              class: "chatSender",
              message: input,
              name: "abhay kumar",
              time: c,
            },
          ],
        });
        console.log("Document successfully updated in Firestore");
      } catch (error) {
        console.error("Error updating document in Firestore: ", error);
      }
    };
    f();
    setFirestoreValue(); // Invoke the setFirestoreValue function to update the value in Firestore
    setMyInputMessage(""); // Clear the input field after submitting the message
  }

  return (
    <div className="chatLive">
      <div className="messageLive">
        <div className="chatSender">
          <div>
            <p>Hi I am sender</p>
            <p>hello</p>
          </div>
        </div>
        <div className="chatReciever">
          <div>
            <p>Hi I am reciever</p>
            <p>hello</p>
          </div>
        </div>

        {fieldValue.message.map((value) => (
          <div className={value.class}>
            <h3>{value.name}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#C3EDC0",
                borderRadius: "2px",
              }}
            >
              <p>{value.message} </p>
              <p style={{ fontSize: "10px", marginLeft: "10px" }}>
                {" "}
                {value.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="inputBottomdiv">
        <SentimentSatisfiedTwoToneIcon sx={{ margin: "10px" }} />
        <input onChange={handleInput} />
        <MicTwoToneIcon sx={{ margin: "10px" }} />
        <button onClick={handlemessageSubmit}>send</button>
      </div>
    </div>
  );
};
export default ChatLive;
