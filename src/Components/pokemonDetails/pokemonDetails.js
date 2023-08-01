import React from 'react';
import styles from '../pokemonDetails/pokemonDetails.module.css';

const pokemonDetails = () => {
  return (
    <div className={`${styles.containerDetail}`}>
      <div className={`${styles.containerFirst}`}></div>
      <div className={`${styles.containerSecond}`}></div>
      <div className={`${styles.containerThree}`}></div>
    </div>
  );
};

export default pokemonDetails;
