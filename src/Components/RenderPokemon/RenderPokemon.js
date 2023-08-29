'use client';
import React, { useEffect } from 'react';
import styles from './RenderPokemon.module.css';
import Image from 'next/image';
import CardPokemon from '../CardPokemon/CardPokemon';
import CardPokemonTypes from '../CardPokemonTypes/CardPokemonTypes';

const RenderPokemon = ({
  errorPokemons,
  setErrorPokemons,
  isFilterPokemon,
  setIsHaveFilter,
  isHaveFilter,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);
  const [isFilter, setisFilter] = React.useState(false);
  const [pokemonsFilter, setPokemonsFilter] = React.useState([]);

  async function Filterpokemons() {
    if (isFilterPokemon.length === 1) {
      const url = `https://pokeapi.co/api/v2/type/${isFilterPokemon[0]}/`;
      const response = await fetch(url);
      const json = await response.json();
      if (json) {
        setPokemonsFilter(json.pokemon);
      }
    } else if (isFilterPokemon.length === 2) {
      const url = `https://pokeapi.co/api/v2/type/${isFilterPokemon[0]}/`;
      const response = await fetch(url);
      const json = await response.json();
      if (json) {
        setPokemonsFilter(json.pokemon);
      }
    }
  }

  React.useEffect(() => {
    if (isFilterPokemon.length === 0) {
      setisFilter(false);
      setIsHaveFilter(false);
    } else if (isFilterPokemon.length > 0 && isFilterPokemon.length < 3) {
      setIsHaveFilter(true);
      setisFilter(true);
      Filterpokemons();
    }
  }, [isFilterPokemon, setIsHaveFilter]);

  function handleClick(event) {
    let eTarget = event.target;
    if (
      (errorPokemons === true &&
        (eTarget.classList.contains('RenderPokemon_cardsPokemons___JGzf') ||
          eTarget.classList.contains('RenderPokemon_pokedexGrid__NRTDz'))) ||
      eTarget.classList.contains('CardPokemon_pokemonCard__nwe8a') ||
      eTarget.classList.contains('CardPokemon_pokemonImage__j6TIS')
    ) {
      setErrorPokemons(false);
    }
  }

  async function fetchPokemons() {
    try {
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${30}&offset=${0}`;
      const response = await fetch(url);
      const json = await response.json();
      setPokemons(json.results);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchPokemons().finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div onClick={handleClick} className={styles.renderPokemonsGrid}>
      {loading || !pokemons ? (
        <p>Espere mais alguns segundos</p>
      ) : (
        <div className={styles.pokedexGrid}>
          {pokemonsFilter &&
            isHaveFilter === true &&
            pokemonsFilter.map((pokemon, index) => {
              return (
                <CardPokemonTypes
                  isFilterPokemon={isFilterPokemon}
                  url={pokemon.pokemon.url}
                  name={pokemon.pokemon.name}
                  key={index}
                />
              );
            })}
          {isHaveFilter === false &&
            pokemons.map((pokemon, index) => {
              return (
                <CardPokemon
                  url={pokemon.url}
                  name={pokemon.name}
                  key={index}
                />
              );
            })}
        </div>
      )}
      <div className={styles.slideCards}>
        <Image
          src="/images/Vector(2).png"
          width="10"
          height="17"
          alt="Seta para esquerda"
        />
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <Image
          src="/images/Vector(3).png"
          width="10"
          height="17"
          alt="Seta para esquerda"
        />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${30}&offset=${0}`;
    const response = await fetch(url);
    const json = await response.json();
    const pokemons = json.results || [];
    setPokemons(json.results);

    return {
      props: {
        pokemons,
      },
    };
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    return {
      props: {
        pokemons: [],
      },
    };
  }
}

export default RenderPokemon;
