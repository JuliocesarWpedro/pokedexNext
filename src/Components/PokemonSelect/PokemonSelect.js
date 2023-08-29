'use client';

import React from 'react';
import styles from './PokemonSelect.module.css';
import RenderPokemon from '../RenderPokemon/RenderPokemon';
import SearchPokemons from '../SearchPokemons/SearchPokemons';

const PokemonSelect = () => {
  const [errorPokemons, setErrorPokemons] = React.useState(false);
  const [isFilterPokemon, setIsFilterPokemon] = React.useState([]);
  const [isHaveFilter, setIsHaveFilter] = React.useState(false);

  let eTarget;
  function handleClick(event) {
    let eTarget = event.target;
    if (
      event.target.classList.contains(
        'PokemonSelect_containerPokemonSelect__KEI9R',
      ) ||
      event.target.classList.contains(
        'SearchPokemons_containerSearchBar__ESDL_',
      )
    ) {
      setErrorPokemons(false);
    }
  }

  return (
    <div onClick={handleClick} className={styles.containerPokemonSelect}>
      <SearchPokemons
        isFilterPokemon={isFilterPokemon}
        setIsFilterPokemon={setIsFilterPokemon}
        setErrorPokemons={setErrorPokemons}
        errorPokemons={errorPokemons}
        isHaveFilter={isHaveFilter}
        setIsHaveFilter={setIsHaveFilter}
      />
      <RenderPokemon
        isHaveFilter={isHaveFilter}
        setIsHaveFilter={setIsHaveFilter}
        errorPokemons={errorPokemons}
        isFilterPokemon={isFilterPokemon}
        setIsFilterPokemon={setIsFilterPokemon}
        setErrorPokemons={setErrorPokemons}
      />
    </div>
  );
};

export default PokemonSelect;
