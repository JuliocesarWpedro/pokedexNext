import React from 'react';
import Image from 'next/image';
import styles from '../PokemonHome/PokemonHome.module.css';

const PokemonHome = () => {
  return (
    <div className={`${styles.containerPokemon} mainContainer`}>
      <div className={styles.textPokemon}>
        <p>#006</p>
      </div>
      <div className={`${styles.divisor}`}>
        <Image
          src="/images/fire-divider.png"
          width="56"
          height="528"
          alt="Imagem Pokemon"
        />
      </div>
      <div className={styles.imagePokemon}>
        <Image
          src="/images/charizard.png"
          width="488"
          height="528"
          alt="Imagem Pokemon"
        />
      </div>
    </div>
  );
};

export default PokemonHome;
