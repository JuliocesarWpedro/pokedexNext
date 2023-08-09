import React from 'react';
import styles from './Error.module.css';
import Image from 'next/image';

const ErrorPokemon = ({ setErrorPokemons }) => {
  return (
    <div className={styles.pokemonError}>
      <div>
        <Image
          src="/images/pikachu-sad.png"
          width="32"
          height="32"
          alt="Pokemon triste"
        />
        <p>Ops, pokémon não encontrado!</p>
      </div>
      <div>
        <Image
          src="/images/Vector(1).png"
          width="20"
          height="20"
          alt="Icone de mais"
        />
        <p>Procure por outros nomes</p>
      </div>
      <div onClick={() => setErrorPokemons(false)}>
        <Image
          src="/images/icon-up-arrow.png"
          width="24"
          height="24"
          alt="Icone de fechar"
        />
      </div>
    </div>
  );
};

export default ErrorPokemon;
