import React from 'react';
import Image from 'next/image';
import styles from './ButtonType.module.css';

const ButtonType = ({ type }) => {
  const types = {
    fire: {
      src: '/images/iconesTypes/fire.svg',
      colorBackground: '#FF9900',
      text: 'Fire',
    },
    flying: {
      src: '/images/iconesTypes/flying.svg',
      colorBackground: '#89BDFF',
      text: 'Flying',
    },
    bug: {
      src: '/images/iconesTypes/bug.svg',
      colorBackground: '#7BCF00',
      text: 'Bug',
    },
    dark: {
      src: '/images/iconesTypes/dark.svg',
      colorBackground: '#5A566A',
      text: 'Dark',
    },
    dragon: {
      src: '/images/iconesTypes/dragon.svg',
      colorBackground: '#0076FF',
      text: 'Dragon',
    },
    eletric: {
      src: '/images/iconesTypes/eletric.svg',
      colorBackground: '#FFDE00',
      text: 'Eletric',
    },
    grass: {
      src: '/images/iconesTypes/grass.svg',
      colorBackground: '#1CD80E',
      text: 'Grass',
    },
    poison: {
      src: '/images/iconesTypes/poison.svg',
      colorBackground: '#F149FF',
      text: 'Poison',
    },
    water: {
      src: '/images/iconesTypes/water.svg',
      colorBackground: '#14A8FF',
      text: 'Water',
    },
  };

  const selectedType = types[type];

  if (!selectedType) {
    return null; // Renderizar nada se o tipo não for válido
  }

  return (
    <button
      className={styles.buttonType}
      style={{ backgroundColor: selectedType.colorBackground }}
    >
      <Image
        src={selectedType.src}
        width={16}
        height={16}
        alt="Icon type pokemon"
      />
      <p>{selectedType.text}</p>
    </button>
  );
};

export default ButtonType;
