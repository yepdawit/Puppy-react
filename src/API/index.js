const cohortName = "2302-ACC-ET-PT-B";
const BaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BaseURL}/players`);
    if (!response.ok) throw new Error("Failed to fetch players");
    const result = await response.json();
    if (!result.data || !result.data.players)
      throw new Error("Players not found in response");
    return result.data.players;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array if something goes wrong
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${BaseURL}/players/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.log(error);
  }
};
