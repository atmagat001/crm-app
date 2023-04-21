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

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "owner":
        setOwner(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "lot-area":
        setLotArea(value);
        break;
      case "price-persqm":
        setPricePerSqm(value);
        break;
      case "zoning":
        setZoning(value);
        break;
      case "current-use":
        setCurrentUse(value);
        break;
      default:
        break;
    }
  };

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
          onChange={onInputChange}
          placeholder="Name"
          value={name}
        />
        <input
          type="text"
          name="owner"
          onChange={onInputChange}
          placeholder="Owner on title"
          value={owner}
        />
        <input
          type="text"
          name="address"
          onChange={onInputChange}
          placeholder="Address"
          value={address}
        />
        <input
          type="text"
          name="city"
          onChange={onInputChange}
          placeholder="City"
          value={city}
        />
        <input
          type="text"
          name="lot-area"
          onChange={onInputChange}
          placeholder="Lot Area"
          value={lotArea}
        />
        <input
          type="text"
          name="price-persqm"
          onChange={onInputChange}
          placeholder="Price per sqm"
          value={pricePerSqm}
        />
        <input
          type="text"
          name="zoning"
          onChange={onInputChange}
          placeholder="Zoning"
          value={zoning}
        />
        <input
          type="text"
          name="current-use"
          onChange={onInputChange}
          placeholder="Current Use"
          value={currentUse}
        />
        <button type="submit">Add Listing</button>
      </form>
      <h2>Listings</h2>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing">
            <h3>{listing.name}</h3>
            <p>Owner: {listing.owner}</p>
            <p>Address: {listing.address}</p>
            <p>City: {listing.city}</p>
            <p>Lot Area: {listing.lotArea}</p>
            <p>Price per sqm: {listing.pricePerSqm}</p>
            <p>Zoning: {listing.zoning}</p>
            <p>Current Use: {listing.currentUse}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
