import React from 'react';
import Image from 'next/image';
import styles from './backgroundOrange.module.css';

const BackgroundOrange = ({ children }) => {
  return (
    <div className={`${styles.homePrincipal} mainContainer`}>
      <Image
        className={styles.pokeballLeft}
        src="/images/pokeball.png"
        width="200"
        height="400"
        alt="Pokeball"
      />
      <Image
        className={styles.pokeballRight}
        src="/images/background-pokeball.png"
        width="200"
        height="400"
        alt="Pokeball"
      />
      {children}
    </div>
  );
};

export default BackgroundOrange;
