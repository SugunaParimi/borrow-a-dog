import React from "react";
import TopBar from "./components/topbar/TopBar";
import React, { useState, useEffect } from "react";
import { petData } from "./firebase-config";
import "../app.css";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  const [pets, setPets] = useState([]);
  const [newPetName, setNewPetName] = useState("");
  const [newPetAge, setNewPetAge] = useState(0);
  const [newPetAbout, setNewPetAbout] = useState("");
  const [newPetImage, setNewPetImage] = useState("");
  const petCollectionRef = collection(petData, "pets");
  const createNewPet = async () => {
    await addDoc(petCollectionRef, {
      name: newPetName,
      age: newPetAge,
      about: newPetAbout,
      image: newPetImage,
    });
  };
  const deletePetDetails = async (id) => {
    const petDoc = doc(petData, "pets", id);
    await deleteDoc(petDoc);
  };
  const updatePetDetails = async (id, age) => {
    const petDoc = doc(petData, "pets", id);
    const newAge = { age: age + 1 };
    await updateDoc(petDoc, newAge);
  };
  useEffect(() => {
    const getPets = async () => {
      const data = await getDocs(petCollectionRef);

      setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //console.log(data.docs);
    };
    getPets();
  }, []);
  return (
    <div>
      <TopBar />
      <About />
      <div className="petDisplay">
        {pets.map((pets) => {
          return (
            <div className="pet_card">
              <h2>Name: {pets.name} </h2>
              <h2>Age: {pets.age} </h2>
              <p>About: {pets.about}</p>
              <img
                src={pets.image}
                alt="pet-image"
                height={"200px"}
                width={"200px"}
              />
              <div>
                <button
                  onClick={() => {
                    updatePetDetails(pets.id, pets.age);
                  }}
                >
                  {""}
                  Update Pet
                </button>
                <button
                  onClick={() => {
                    deletePetDetails(pets.id);
                  }}
                >
                  {""}
                  Delete Pet
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="add-pet">
        <h1>Add Your Pet To Borrow A Pet</h1>
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

        <button onClick={createNewPet}>Create New Pet </button>
      </div>
      <Contact />
    </div>
  );
}

export default App;
