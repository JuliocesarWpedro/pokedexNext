import React from 'react';

const GetPokemon = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = async (limit = 9, offset = 0) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      let response = await fetch(url);
      json = await response.json();
      if (!response.ok) throw new Error('Não foi encontrado');
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  };

  return {
    data,
    loading,
    error,
    request,
  };
};

export default GetPokemon;
