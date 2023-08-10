const cohortName = "2302-ACC-ET-PT-B";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchPuppies = async () => {
  try {
    const { data } = await axios.get(`${APIURL}/puppies`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePlayer = async (id) => {
  const response = await fetch(`${APIURL}/puppies/${id}`);
  return await response.json();
};

export const createPlayer = async (player) => {
  const response = await fetch(`${APIURL}/puppies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  return await response.json();
};
export const deletePlayer = async (id) => {
  const response = await fetch(`${APIURL}/puppies/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const updatePlayer = async (id, player) => {
  const response = await fetch(`${APIURL}/puppies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  return await response.json();
};
