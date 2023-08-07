import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../api";

const Allplayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };

    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Allplayers;
