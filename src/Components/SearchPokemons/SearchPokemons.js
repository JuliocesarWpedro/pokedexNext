'use client';

import React from 'react';
import styles from './SearchPokemons.module.css';
import Image from 'next/image';
import SearchPokemon from '../SearchPokemon';
import ErrorPokemon from '../ErrorPokemon';

const SearchPokemons = ({ setErrorPokemons, errorPokemons }) => {
  const [search, setSearch] = React.useState('');
  const inputEl = React.useRef(null);
  const { data, request, error } = SearchPokemon();

  React.useEffect(() => {
    if (error) {
      setErrorPokemons(true);
    } else {
      setErrorPokemons(false);
    }
  }, [error, setErrorPokemons]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (search) {
      request(search);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div className={styles.containerSearchBar}>
      <div className={styles.inputContainer}>
        <input
          ref={inputEl}
          type="text"
          placeholder="Pesquisar Pokemon"
          onChange={handleChange}
        />
        <button className={styles.containerImg} onClick={handleSearch}>
          <Image
            src="/images/vector.png"
            width="19"
            height="19"
            alt="Icone de pesquisar"
          />
        </button>
      </div>
      {errorPokemons && <ErrorPokemon setErrorPokemons={setErrorPokemons} />}
    </div>
  );
};

export default SearchPokemons;
