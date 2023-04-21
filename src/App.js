import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Listings from "./components/Listings";
import Form from "./components/Form";

function App() {
  const initialState = JSON.parse(localStorage.getItem("listings")) || [];
  const [listings, setListings] = useState(initialState);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [lotArea, setLotArea] = useState("");
  const [pricePerSqm, setPricePerSqm] = useState("");
  const [zoning, setZoning] = useState("");
  const [currentUse, setCurrentUse] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    name: "",
    owner: "",
    address: "",
    city: "",
    lotArea: "",
    pricePerSqm: "",
    zoning: "",
    currentUse: "",
    id: "",
  });

  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Form
          listings={listings}
          setListings={setListings}
          name={name}
          setName={setName}
          owner={owner}
          setOwner={setOwner}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          lotArea={lotArea}
          setLotArea={setLotArea}
          pricePerSqm={pricePerSqm}
          setPricePerSqm={setPricePerSqm}
          zoning={zoning}
          setZoning={setZoning}
          currentUse={currentUse}
          setCurrentUse={setCurrentUse}
          id={id}
          setId={setId}
          edit={edit}
          setEdit={setEdit}
          input={input}
          setInput={setInput}
        />
      </div>

      {/* <div>
        {" "}
        <Listings />{" "}
      </div> */}
    </div>
  );
}

export default App;
