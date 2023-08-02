import React from 'react';
import styles from '../pokemonDetails/pokemonDetails.module.css';
import Image from 'next/image';

const pokemonDetails = ({ setDetails }) => {
  function fecharicon() {
    setDetails(false);
  }
  return (
    <>
      <div className={`${styles.backgroundFound}`}></div>
      <div className={`${styles.containerDetail}`}>
        <Image
          onClick={fecharicon}
          className={`${styles.fecharIcon}`}
          src="/images/close.png"
          width="48"
          height="48"
          alt="Icone de fechar"
        />
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
        <div className={`${styles.containerSecond}`}>
          <Image
            src="/images/Rectangle(2).png"
            width="1"
            height="124"
            alt="Line"
          />
          <Image
            src="/images/pokeball-diviser.png"
            width="56"
            height="56"
            alt="Pokemon ball"
          />
          <Image
            src="/images/Rectangle(2).png"
            width="1"
            height="124"
            alt="Line"
          />
        </div>
        <div className={`${styles.containerThree}`}>
          <h2>Stats</h2>
          <div className={`${styles.stats}`}>
            <div>
              <p>HP</p>
              <span>78</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
            <div>
              <p>Attack</p>
              <span>84</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
            <div>
              <p>Defense</p>
              <span>78</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
            <div>
              <p>Sp. Atk</p>
              <span>109</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
            <div>
              <p>Sp. Def</p>
              <span>85</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
            <div>
              <p>Speed</p>
              <span>100</span>
              <div className={`${styles.progressStats}`}>
              <div className={`${styles.progessStatsGreen}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pokemonDetails;
