import React, { useState } from "react";

const cohortName = "2302-ACC-ET-PT-B";
const BaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench"); // Default to 'bench'
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = {
      name,
      breed,
      status,
      imageUrl,
    };

    try {
      const response = await fetch(BaseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Player created successfully");
        // You can redirect or update the UI here as needed
      } else {
        console.log("Error creating player:", data.error);
      }
    } catch (error) {
      console.log("There was an error creating the player:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
