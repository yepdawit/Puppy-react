import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { Link } from "react-router-dom"; // Import Link to create "See Details" button

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState(""); // New state for search text

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersFetched = await fetchAllPlayers();
      if (Array.isArray(playersFetched)) {
        setPlayers(playersFetched);
      }
    };
    fetchPlayers();
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  ); // Filter players based on search text

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />{" "}
      {/* Search input */}
      {filteredPlayers &&
        filteredPlayers.map((player) => {
          return (
            <div key={player.id}>
              <h4>{player.name}</h4>
              <p>{player.id}</p>
              <p>{player.breed}</p>
              <p>{player.status}</p>
              <img src={player.imageUrl} alt={`${player.name}`} />
              <Link to={`/player/${player.id}`}>See Details</Link>{" "}
              {/* "See Details" button */}
            </div>
          );
        })}
    </div>
  );
};

export default AllPlayers;
