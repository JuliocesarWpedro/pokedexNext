import React, { useEffect, useState } from 'react';
import styles from './CardPokemon.module.css';
import Image from 'next/image';
import ButtonDetalhes from '../ButtonDetalhes/ButtonDetalhes';
import ButtonType from '../ButtonType/ButtonType';
import PokemonDetails from '../pokemonDetails/pokemonDetails';
import Blur from '../Blur/Blur';

const CardPokemon = ({ url, name }) => {
  const [details, setDetails] = React.useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgPokemon, setImgPokemon] = useState(null);
  const [id, setId] = React.useState(0);

  function handleClick(event) {
    event.preventDefault();
    setDetails(true);
  }

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json(); // Usar jsonData em vez de data
          setData(jsonData);
          if (jsonData.sprites.other.home.front_default) {
            setImgPokemon(jsonData.sprites.other.home.front_default);
          } else {
            setImgPokemon(jsonData.sprites.front_default);
          }
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
        data &&
        imgPokemon && (
          <>
            {details && (
              <PokemonDetails
                setDetails={setDetails}
                data={data}
                id={id}
                name={name}
                img={imgPokemon}
              />
            )}
            <div className={styles.pokemonCard}>
              {loading === false && imgPokemon && (
                <Image
                  className={styles.pokemonImage}
                  src={imgPokemon}
                  width={256}
                  height={256}
                  alt="Imagem do Pokemon"
                />
              )}
              <div className={styles.containerText}>
                <p className={styles.idPokemon}>#{id}</p>
                <h1 className={styles.titlePokemon}>{name}</h1>
                <div className={styles.buttonsTypes}>
                  <ButtonType type={data.types[0].type.name} />
                  {data.types[1] && (
                    <ButtonType type={data.types[1].type.name} />
                  )}
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
              <div onClick={handleClick}>
                {data.types[0].type.name && (
                  <ButtonDetalhes type={data.types[0].type.name} />
                )}
              </div>
              <Blur type={data.types[0].type.name} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default CardPokemon;
