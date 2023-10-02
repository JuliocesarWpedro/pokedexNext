'use client';
import React, { useEffect } from 'react';
import styles from './RenderPokemon.module.css';
import Image from 'next/image';
import CardPokemon from '../CardPokemon/CardPokemon';
import CardPokemonTypes from '../CardPokemonTypes/CardPokemonTypes';
import Loading from '../Loading/Loading';

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
  const [pages, setPages] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    const Filterpokemons = async () => {
      if (isFilterPokemon.length === 1) {
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/type/${isFilterPokemon[0]}/`;
        const response = await fetch(url);
        const json = await response.json();
        if (json) {
          setPokemonsFilter(json.pokemon);
          setLoading(false);
        }
      } else if (isFilterPokemon.length === 2) {
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/type/${isFilterPokemon[0]}/`;
        const response = await fetch(url);
        const json = await response.json();
        if (json) {
          setPokemonsFilter(json.pokemon);
          setLoading(false);
        }
      }
    };

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

  function onLeftClick() {
    if (pages > 1) {
      setPages(pages - 1);
      setOffset(offSet - 30);
    }
  }

  function onRightClick() {
    if (pages !== totalPages) {
      setPages(pages + 1);
      setOffset(offSet + 30);
    }
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${30}&offset=${offSet}`;
        const response = await fetch(url);
        const json = await response.json();
        setTotalPages(Math.ceil(json.count / 30));
        setPokemons(json.results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchPokemons().finally(() => {
      setLoading(false);
    });
  }, [pages, offSet]);

  return (
    <div onClick={handleClick} className={styles.renderPokemonsGrid}>
      {isHaveFilter === false && (
        <div className={styles.slideCards}>
          {pages === 1 ? (
            <Image
              className={styles.Desativado}
              onClick={onLeftClick}
              src="/images/Vector(2).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          ) : (
            <Image
              onClick={onLeftClick}
              src="/images/Vector(2).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          )}

          <p className={styles.totalPokemons}>{pages}</p>
          <p>DE</p>
          <div>
            <p>{totalPages}</p>
          </div>
          {pages === totalPages ? (
            <Image
              onClick={onRightClick}
              className={styles.Desativado}
              src="/images/Vector(3).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          ) : (
            <Image
              onClick={onRightClick}
              src="/images/Vector(3).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          )}
        </div>
      )}
      {loading || !pokemons ? (
        <Loading />
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
      {isHaveFilter === false && (
        <div className={styles.slideCards}>
          {pages === 1 ? (
            <Image
              className={styles.Desativado}
              onClick={onLeftClick}
              src="/images/Vector(2).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          ) : (
            <Image
              onClick={onLeftClick}
              src="/images/Vector(2).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          )}

          <p className={styles.totalPokemons}>{pages}</p>
          <p>DE</p>
          <div>
            <p>{totalPages}</p>
          </div>
          {pages === totalPages ? (
            <Image
              onClick={onRightClick}
              className={styles.Desativado}
              src="/images/Vector(3).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          ) : (
            <Image
              onClick={onRightClick}
              src="/images/Vector(3).png"
              width="10"
              height="17"
              alt="Seta para esquerda"
            />
          )}
        </div>
      )}
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
