import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPlayers } from "../API";

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
          <Link to={`/${player.id}`}>
            <h2>{player.name}</h2>
          </Link>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Allplayers;
