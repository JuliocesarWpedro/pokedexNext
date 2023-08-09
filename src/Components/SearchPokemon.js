import React from 'react';
const SearchPokemon = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (pokemon) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
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
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default SearchPokemon;
