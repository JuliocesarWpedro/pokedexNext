import React from 'react';
import styles from '../ContainerFirst/ContainerFirst.module.css';
import Image from 'next/image';

const ContainerFirst = () => {
  return (
    <div className={`${styles.containerFirst}`}>
      <Image
        className={`${styles.imagePokemon}`}
        src="/images/pokemon-img.png"
        width="256"
        height="256"
        alt="Pokemon"
      />
      <p className={`${styles.numberid}`}>#006</p>
      <h1 className={`${styles.titlePokemon}`}>Charizard</h1>
      <div className={`${styles.buttons}`}>
        <button>Flying</button>
        <button>Fire</button>
      </div>
      <div className={`${styles.caracteristicas}`}>
        <div className={`${styles.peso}`}>
          <div>
            <Image
              src="/images/weight scale.png"
              width="24"
              height="24"
              alt="Icone de peso"
            />
            <p>90.5 kg</p>
          </div>
          <p>Peso</p>
        </div>
        <div className={`${styles.altura}`}>
          <div>
            <Image
              src="/images/ruler.png"
              width="24"
              height="24"
              alt="Icone de altura"
            />
            <p>1.7 m</p>
          </div>
          <p>Altura</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerFirst;
