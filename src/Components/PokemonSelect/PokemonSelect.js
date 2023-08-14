'use client';

import React from 'react';
import styles from './PokemonSelect.module.css';
import RenderPokemon from '../RenderPokemon/RenderPokemon';
import SearchPokemons from '../SearchPokemons/SearchPokemons';

const PokemonSelect = () => {
  const [errorPokemons, setErrorPokemons] = React.useState(false);
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
        setErrorPokemons={setErrorPokemons}
        errorPokemons={errorPokemons}
      />
      <RenderPokemon errorPokemons={errorPokemons} setErrorPokemons={setErrorPokemons} />
    </div>
  );
};

export default PokemonSelect;
