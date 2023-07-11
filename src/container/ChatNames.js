import React from "react";
import "../App.css";
import Fetch from "../fetch";
import { useState, useEffect } from "react";
import firestore from "../firebase";

const ChatNames = ({ setId }) => {
  const [names, setNames] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [newDocumentId, setNewDocumentId] = useState("");

  function handleNewName() {
    const a = window.prompt(
      "hello",
      <input
        value={newDocumentId}
        onChange={(event) => setNewDocumentId(event.target.value)}
      />
    );
    createNewDocument(a);
  }

  const createNewDocument = async (a) => {
    try {
      const collectionRef = await firestore.collection("names");
      const newDocRef = await collectionRef.add({
        message: [],
        name: a,
      });
      setNewDocumentId(newDocRef.id);
      setDocuments([...documents, { id: newDocRef.id }]);
      console.log("New document created in Firestore with ID:", newDocRef.id);
    } catch (error) {
      console.error("Error creating new document in Firestore:", error);
    }
  };

  useEffect(() => {
    const fetchFirestoreDocuments = async () => {
      try {
        const collectionRef = await firestore.collection("names");
        const snapshot = await collectionRef.get();
        const fetchedDocuments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(fetchedDocuments);
        console.log("fetching", fetchedDocuments[0].id.name);
      } catch (error) {
        console.error("Error fetching documents from Firestore: ", error);
      }
    };

    fetchFirestoreDocuments();
  }, [names]);
  return (
    <>
      <div className="chatNames">
        <input />
      </div>
      <h1 style={{ margin: 0 }} onClick={handleNewName}>
        Add New Name
      </h1>
      <div>
        {console.log("heyBroooo", documents)}
        {documents.map((name) => (
          <p key={name.id} onClick={() => setId(name.id)}>
            {name.id}
          </p>
        ))}
      </div>
    </>
  );
};
export default ChatNames;
