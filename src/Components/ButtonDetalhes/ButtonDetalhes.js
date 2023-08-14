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
    eletric: {
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
