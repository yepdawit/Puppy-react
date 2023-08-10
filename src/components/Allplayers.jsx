import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../API";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };
    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <p>{player.age}</p>
            <p>{player.breed}</p>
            <p>{player.description}</p>
            <img src={player.image} alt={player.name} />
          </div>
        );
      })}
    </div>
  );
};

export default AllPlayers;
