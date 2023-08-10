import React, { useState } from "react";
import { createPlayer } from "../API";

const NewPlayerForm = () => {
  const [player, setPlayer] = useState({
    name: "",
    age: "",
    breed: "",
    image: "",
    description: "",
  });

  const handleChange = (event) => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPlayer(player);
  };

  return (
    <form onsubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input type="text" name="age" placeholder="Age" onChange={handleChange} />
      <input
        type="text"
        name="breed"
        placeholder="Breed"
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPlayerForm;
