import React from 'react';

const SearchPokemon = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({ searchValue }) => {
    let response; // Renomear esta variável
    let json;
    try {
      setError(null);
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

      response = await fetch(url); // Atribuir à variável response
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
