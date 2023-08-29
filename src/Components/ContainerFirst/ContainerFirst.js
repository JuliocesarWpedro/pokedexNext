import React from 'react';
import styles from '../ContainerFirst/ContainerFirst.module.css';
import Image from 'next/image';
import ButtonType from '../ButtonType/ButtonType';

const ContainerFirst = ({ img, id, data, name }) => {
  return (
    <div className={`${styles.containerFirst}`}>
      <Image
        className={`${styles.imagePokemon}`}
        src={img}
        width="256"
        height="256"
        alt="Pokemon"
      />
      <div className={styles.firstContainerText}>
        <p className={`${styles.numberid}`}>#{id}</p>
        <h1 className={`${styles.titlePokemon}`}>{name}</h1>
        <div className={`${styles.buttonsTypes}`}>
          <ButtonType type={data.types[0].type.name} />
          {data.types[1] && <ButtonType type={data.types[1].type.name} />}
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
              <p>{data.weight / 10} Kg</p>
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
              <p>{data.height / 10} m</p>
            </div>
            <p>Altura</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFirst;
