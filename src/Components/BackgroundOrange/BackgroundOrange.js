import React from 'react';
import Image from 'next/image';
import styles from './backgroundOrange.module.css';

const BackgroundOrange = ({ children }) => {
  return (
    <div className={`${styles.homePrincipal}`}>
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
      <Image
        className={styles.waves}
        src="/images/waves.png"
        width="1920"
        height="120"
        alt="Waves"
      />
    </div>
  );
};

export default BackgroundOrange;
