import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import React, { useState, useEffect } from "react";

const SinglePlayer = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const fetchedPlayer = await fetchSinglePlayer(id);
      setPlayer(fetchedPlayer);
    };
    fetchPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>; // Add a loading state if the player is null

  return (
    <div>
      <h4>{player.name}</h4>
      <p>{player.id}</p>
      <p>{player.breed}</p>
      <p>{player.status}</p>
      <img src={player.imageUrl} alt={`${player.name}`} />
    </div>
  );
};

export default SinglePlayer;
