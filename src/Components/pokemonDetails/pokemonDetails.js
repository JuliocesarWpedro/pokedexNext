import React from 'react';
import styles from '../pokemonDetails/pokemonDetails.module.css';
import Image from 'next/image';
import ContainerFirst from '../ContainerFirst/ContainerFirst';
import ContainerSecond from '../ContainerSecond/ContainerSecond';
import ContainerThree from '../containerThree/containerThree';

const PokemonDetails = ({ setDetails, data, id, name, img }) => {
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
        <div className={styles.divContainerDetails} style={{ display: 'flex' }}>
          <ContainerFirst img={img} id={id} data={data} name={name} />
          <ContainerSecond />
          <ContainerThree data={data} />
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
