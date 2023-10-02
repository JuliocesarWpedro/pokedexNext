import React from 'react';
import styles from '../CardPokemon/CardPokemon.module.css';

const Blur = ({ type }) => {
  const types = {
    fire: {
      colorBackground: '#FF9900',
    },
    flying: {
      colorBackground: '#89BDFF',
    },
    bug: {
      colorBackground: '#7BCF00',
    },
    dark: {
      colorBackground: '#5A566A',
    },
    dragon: {
      colorBackground: '#0076FF',
    },
    electric: {
      colorBackground: '#FFDE00',
    },
    grass: {
      colorBackground: '#1CD80E',
    },
    poison: {
      colorBackground: '#F149FF',
    },
    water: {
      colorBackground: '#14A8FF',
    },
    normal: {
      colorBackground: 'rgb(202, 202, 202)',
    },
    ground: {
      colorBackground: 'rgb(83, 64, 38)',
    },
    rock: {
      colorBackground: '#a38c21',
    },
    ghost: {
      colorBackground: '#7b62a3',
    },
    psychic: {
      colorBackground: '#f366b9',
    },
    fighting: {
      colorBackground: '#d56723',
    },

    ice: {
      colorBackground: '#51c4e7',
    },
    steel: {
      colorBackground: '#9eb7b8',
    },
  };

  const selectedType = types[type];

  if (!selectedType) {
    return null;
  }
  return (
    <div
      style={{ background: selectedType.colorBackground }}
      className={styles.containerEffect}
    ></div>
  );
};

export default Blur;
