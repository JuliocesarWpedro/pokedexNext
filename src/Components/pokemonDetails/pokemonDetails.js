import React from 'react';
import styles from '../pokemonDetails/pokemonDetails.module.css';
import Image from 'next/image';
import ContainerFirst from '../ContainerFirst/ContainerFirst';
import ContainerSecond from '../ContainerSecond/ContainerSecond';
import ContainerThree from '../containerThree/containerThree';

const PokemonDetails = ({ setDetails }) => {
  const numberHp = 78;
  const numberAtk = 84;
  const numberDf = 78;
  const numberSpAtk = 109;
  const numberSpDef = 85;
  const numberSpeed = 100;

  return (
    <>
      <div
        onClick={() => setDetails(false)}
        className={`${styles.backgroundFound}`}
      />
      <div className={`${styles.containerDetail}`}>
        <Image
          onClick={() => setDetails(false)}
          className={`${styles.fecharIcon}`}
          src="/images/close.png"
          width="48"
          height="48"
          alt="Icone de fechar"
        />
        <ContainerFirst />
        <ContainerSecond />
        <ContainerThree />
      </div>
    </>
  );
};

export default PokemonDetails;
