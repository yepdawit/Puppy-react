export const fetchPlayers = async () => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b`

return response.json();
};

export const fetchPlayer = async (id) => {
    const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b/${id}`
    );
    return response.json();
    }

    export const createPlayer = async (player) => {

        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(player),
            }
        );
        return response.json();
    }

    export  const deletePlayer = async (id) => {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b/${id}`,
            {
                method: "DELETE",
            }
        );
        return response.json();
    }

    