import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../api";
import { Link } from "react-router-dom";

function Allplayers() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPlayers().then((data) => setPlayers(data));
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.includes(search)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPlayers.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <Link to={`/players/${player.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Allplayers;
