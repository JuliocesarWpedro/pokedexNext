import React from 'react';
import styles from './RenderPokemon.module.css';
import CardPokemon from '../CardPokemon/CardPokemon';

const RenderPokemon = () => {
  return (
    <div className={styles.cardsPokemons}>
      <CardPokemon />
    </div>
  );
};

export default RenderPokemon;
