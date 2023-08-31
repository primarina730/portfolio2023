import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./css/deliverables.css";

function Deliverables() {
  const [deliverables, setDeliverables] = useState([]);
  useEffect(() => {
    const deliverablesCollectionRef = collection(db, "deliverables");
    getDocs(deliverablesCollectionRef).then((querySnapshot) => {
      setDeliverables(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="deliverables-container">
      {deliverables.map((deliverable) => (
        <div key={deliverable.id} className="each-deliverables">
          <h2 className="deliverable-title">
            <a href={deliverable.url}>{deliverable.name}</a>
          </h2>
          <img
            src={deliverable.thumbnail}
            alt={deliverable.name}
            className="deliverables-thumbnail"
          />
          <div className="deliverables-information">
            <div className="deliverables-tools-component">
              <h3 className="deliverables-tools">Tools</h3>
              <ul className="deliverable-tools-ul">
                {deliverable.tool.map((deliverabletools) => (
                  <li key={deliverabletools}>{deliverabletools}</li>
                ))}
              </ul>
            </div>
            <div deliverables-type-component>
              <h3 className="deliverables-type">Type</h3>
              <p>{deliverable.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Deliverables;
