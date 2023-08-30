import React from 'react';
import styles from './ButtonDetalhes.module.css';
import Image from 'next/image';

const ButtonDetalhes = ({ type }) => {
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
      colorBackground: '#b97fc9',
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
    return null; // Renderizar nada se o tipo não for válido
  }

  return (
    <button
      style={{ backgroundColor: selectedType.colorBackground }}
      className={styles.button}
    >
      <Image
        src="/images/icon-bolt.svg"
        width={24}
        height={24}
        alt="Icone do pokemon"
      />
      <p>Mais detalhes</p>
    </button>
  );
};

export default ButtonDetalhes;
