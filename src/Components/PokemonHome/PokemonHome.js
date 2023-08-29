'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../PokemonHome/PokemonHome.module.css';
import PokemonDetails from '../pokemonDetails/pokemonDetails';
import ButtonType from '../ButtonType/ButtonType';

const PokemonHome = () => {
  const [details, setDetails] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [imgPokemon, setImgPokemon] = React.useState('');
  const [id, setId] = React.useState(0);

  async function fetchPokemons() {
    try {
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon/6/`;
      const response = await fetch(url);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        setImgPokemon(jsonData.sprites.other.home.front_default);
        setId(jsonData.id);
      }
      setPokemons(json.results);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchPokemons();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    setDetails(true);
  }

  return (
    <>
      {details && data && (
        <PokemonDetails
          setDetails={setDetails}
          data={data}
          id={id}
          name={'Charizard'}
          img={imgPokemon}
        />
      )}
      <div className={`${styles.containerPokemon}`}>
        <div className={styles.textPokemon}>
          <p className={styles.number}>#006</p>
          {data && (
            <div className={styles.buttonsTypes}>
              <ButtonType type={data.types[0].type.name} />
              {data.types[1] && <ButtonType type={data.types[1].type.name} />}
            </div>
          )}
          <h1 className={styles.textFirst}>Charizard</h1>
          <p className={styles.textSecundary}>
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
            &ldquo;Mega Charizard X&rdquo;; No entanto, ele pode aprender
            ataques do tipo Dragão.
          </p>
          <button onClick={handleClick} className={styles.buttonDetails}>
            Mais detalhes
          </button>
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
    </>
  );
};

export default PokemonHome;
