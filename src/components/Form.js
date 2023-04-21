import React, { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [lotArea, setLotArea] = useState("");
  const [pricePerSqm, setPricePerSqm] = useState("");
  const [zoning, setZoning] = useState("");
  const [currentUse, setCurrentUse] = useState("");
  const [listings, setListings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !owner ||
      !address ||
      !city ||
      !lotArea ||
      !pricePerSqm ||
      !zoning ||
      !currentUse
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newListing = {
      id: uuidv4(),
      name,
      owner,
      address,
      city,
      lotArea,
      pricePerSqm,
      zoning,
      currentUse,
    };

    setListings([...listings, newListing]);

    setName("");
    setOwner("");
    setAddress("");
    setCity("");
    setLotArea("");
    setPricePerSqm("");
    setZoning("");
    setCurrentUse("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
        <input
          type="text"
          name="owner"
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Owner on title"
          value={owner}
        />
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          value={address}
        />
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          value={city}
        />
        <input
          type="text"
          name="lot-area"
          onChange={(e) => setLotArea(e.target.value)}
          placeholder="Lot Area"
          value={lotArea}
        />
        <input
          type="text"
          name="price-persqm"
          onChange={(e) => setPricePerSqm(e.target.value)}
          placeholder="Price per sqm"
          value={pricePerSqm}
        />
        <input
          type="text"
          name="zoning"
          onChange={(e) => setZoning(e.target.value)}
          placeholder="Zoning"
          value={zoning}
        />
        <input
          type="text"
          name="current-use"
          onChange={(e) => setCurrentUse(e.target.value)}
          placeholder="Current Use"
          value={currentUse}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
