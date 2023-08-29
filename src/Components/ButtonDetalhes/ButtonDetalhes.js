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
