'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchPokemons.module.css';
import Image from 'next/image';
import PokemonDetails from '../pokemonDetails/pokemonDetails';
import ErrorPokemon from '../ErrorPokemon';
import Link from 'next/link';
import FilterTypes from '../FilterTypes/FilterTypes';

const SearchPokemons = ({
  setErrorPokemons,
  errorPokemons,
  isFilterPokemon,
  setIsFilterPokemon,
  isHaveFilter,
  setIsHaveFilter,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const inputEl = useRef(null);
  const [details, setDetails] = useState(false);
  const [data, setData] = useState(null);
  const [imgPokemon, setImgPokemon] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setErrorPokemons(true);
    }
  }, [setErrorPokemons, error]);

  const handleSearch = async () => {
    if (searchValue) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setData(json);
          setImgPokemon(json.sprites.other.home.front_default);
          setDetails(true);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
    setError(false);
  };

  return (
    <>
      <div className={styles.buttonScroll}>
        <Link href="#header">
          <Image
            src="/images/icon-home.svg"
            width="24"
            height="24"
            alt="Ícone de inicio"
          />
          <p>Início</p>
        </Link>
      </div>
      <div className={styles.containerSearchBar}>
        {details && data && (
          <PokemonDetails
            setDetails={setDetails}
            data={data}
            id={data.id}
            name={data.name}
            img={data.sprites.other.home.front_default}
          />
        )}
        <FilterTypes
          isHaveFilter={isHaveFilter}
          setIsHaveFilter={setIsHaveFilter}
          isFilterPokemon={isFilterPokemon}
          setIsFilterPokemon={setIsFilterPokemon}
        />
        <div className={styles.inputContainer}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Pesquisar Pokémon"
            onChange={handleChange}
          />
          <button className={styles.containerImg} onClick={handleSearch}>
            <Image
              src="/images/Vector.png"
              width="24"
              height="24"
              alt="Icone de pesquisar"
            />
          </button>
        </div>
        {errorPokemons && <ErrorPokemon setErrorPokemons={setErrorPokemons} />}
      </div>
    </>
  );
};

export default SearchPokemons;
