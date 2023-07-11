import firestore from "./firebase";
import { useState, useEffect } from "react";

function Fetch({ names, setNames }) {
  const [fieldValue, setFieldValue] = useState("");

  const [documents, setDocuments] = useState([]);
  function abhayy() {
    const fetchFirestoreDocument = async () => {
      try {
        const docRef = firestore.collection("names").doc(documents);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          setFieldValue(data);
          console.log("Document data successfully fetched from Firestore");
          console.log(data);
        } else {
          console.log("Document does not exist");
          console.log(documents[0].id);
        }
      } catch (error) {
        console.error("Error fetching document from Firestore: ", error);
      }
    };

    fetchFirestoreDocument();
  }

  useEffect(() => {
    const fetchFirestoreDocuments = async () => {
      try {
        const collectionRef = firestore.collection("names");
        const snapshot = await collectionRef.get();
        const fetchedDocuments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(fetchedDocuments[0].id);
        console.log("Documents successfully fetched from Firestore");
        console.log(fetchedDocuments[0].id);
      } catch (error) {
        console.error("Error fetching documents from Firestore: ", error);
      }
    };

    fetchFirestoreDocuments();
  }, []);

  return <></>;
}

export default Fetch;
