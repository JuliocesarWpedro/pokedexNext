import React, { useEffect } from 'react';
import styles from './RenderPokemon.module.css';
import Image from 'next/image';
import CardPokemon from '../CardPokemon/CardPokemon';

const RenderPokemon = ({ errorPokemons, setErrorPokemons }) => {
  const [loading, setLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);


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
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${9}&offset=${0}`;
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
    fetchPokemons();
  }, []);

  return (
    <div onClick={handleClick} className={styles.renderPokemonsGrid}>
      {loading || !pokemons ? (
        <p>Espere mais alguns segundos</p>
      ) : (
        <div className={styles.pokedexGrid}>
          {pokemons.map((pokemon, index) => {
            return (
              <CardPokemon url={pokemon.url} name={pokemon.name} key={index} />
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

export default RenderPokemon;
