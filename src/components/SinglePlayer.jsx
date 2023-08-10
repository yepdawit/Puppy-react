import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deletePlayer, fetchSinglePlayer } from "../API";

const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchSinglePlayer(id).then((data) => setPlayer(data));
  }, [id]);

  const handleDelete = () => {
    deletePlayer(id);
  };

  return (
    <div>
      {player && (
        <>
          <h3>{player.name}</h3>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default SinglePlayer;
