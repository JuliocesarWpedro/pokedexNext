import React from 'react';
import Image from 'next/image';
import styles from '../PokemonHome/PokemonHome.module.css';

const PokemonHome = () => {
  return (
    <div className={`${styles.containerPokemon}`}>
      <div className={styles.textPokemon}>
        <p className={styles.number}>#006</p>
        <div className={styles.buttonCarac}>
          <button>Fire</button>
          <button>Flying</button>
        </div>
        <h1 className={styles.textFirst}>Charizard</h1>
        <p className={styles.textSecundary}>
          Charizard se assemelha a um grande tradicional dragão europeu. Apesar
          da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e
          Voador, e não um tipo Dragão, exceto em sua forma "Mega Charizard X";
          No entanto, ele pode aprender ataques do tipo Dragão.
        </p>
        <button className={styles.buttonDetails}>Mais detalhes</button>
      </div>
      <div className={`${styles.divisor}`}>
        <Image
          src="/images/Rectangle.png"
          width="1"
          height="212"
          alt="Imagem Pokemon"
        />
        <Image
          src="/images/divider-fire.png"
          width="56"
          height="56"
          alt="Divisor"
        />
        <Image
          src="/images/Rectangle2.png"
          width="1"
          height="212"
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
