import React, { useEffect, useState } from 'react';
import styles from './CardPokemon.module.css';
import Image from 'next/image';
import ButtonDetalhes from '../ButtonDetalhes/ButtonDetalhes';
import ButtonType from '../ButtonType/ButtonType';

const CardPokemon = ({ url, name }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgPokemon, setImgPokemon] = useState('');
  const [id, setId] = React.useState(0);

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json(); // Usar jsonData em vez de data
          setData(jsonData);
          setImgPokemon(jsonData.sprites.other.home.front_default);
          setId(jsonData.id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPokemon();
  }, [url]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && ( // Verificar se data existe antes de renderizar
          <div className={styles.pokemonCard}>
            <Image
              className={styles.pokemonImage}
              src={imgPokemon}
              width={256}
              height={256}
              alt="Imagem do Pokemon"
            />
            <div className={styles.containerText}>
              <p className={styles.idPokemon}>#{id}</p>
              <h1 className={styles.titlePokemon}>{name}</h1>
              <div className={styles.buttonsTypes}>
                <ButtonType type={data.types[0].type.name} />
                {data.types[1] && <ButtonType type={data.types[1].type.name} />}
              </div>
            </div>
            <ButtonDetalhes type={data.types[0].type.name} />
          </div>
        )
      )}
    </>
  );
};

export default CardPokemon;
