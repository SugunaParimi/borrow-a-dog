import React from "react";
import React, { useState, useEffect } from "react";
function addPetDetails() {
  const [newPetName, setNewPetName] = useState("");
  const [newPetAge, setNewPetAge] = useState(0);
  const [newPetAbout, setNewPetAbout] = useState("");
  const [newPetImage, setNewPetImage] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pet Name"
        onChange={(event) => {
          setNewPetName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter Pet Age"
        onChange={(event) => {
          setNewPetAge(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Pet information"
        onChange={(event) => {
          setNewPetAbout(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Pet Image Url"
        onChange={(event) => {
          setNewPetImage(event.target.value);
        }}
      />
    </div>
  );
}

export default addPetDetails;
