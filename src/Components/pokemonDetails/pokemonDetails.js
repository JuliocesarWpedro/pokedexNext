import React from 'react';
import styles from '../pokemonDetails/pokemonDetails.module.css';
import Image from 'next/image';

const pokemonDetails = ({ setDetails }) => {
  const numberHp = 78;
  const numberAtk = 84;
  const numberDf = 78;
  const numberSpAtk = 109;
  const numberSpDef = 85;
  const numberSpeed = 100;

  let numeroHP = Math.round((304 * numberHp) / 100);
  let numeroAtk = Math.round((304 * numberAtk) / 100);
  let numeroDf = Math.round((304 * numberDf) / 100);
  let numeroSpAtk = Math.round((304 * numberSpAtk) / 100);
  let numeroSpDef = Math.round((304 * numberSpDef) / 100);
  let numeroSpeed = Math.round((304 * numberSpeed) / 100);

  if (numberHp >= 100) {
    numeroHP = 304;
  }
  if (numberAtk >= 100) {
    numeroAtk = 304;
  }
  if (numberDf >= 100) {
    numeroDf = 304;
  }
  if (numberSpAtk >= 100) {
    numeroSpAtk = 304;
  }
  if (numberSpDef >= 100) {
    numeroSpDef = 304;
  }
  if (numberSpeed >= 100) {
    numeroSpeed = 304;
  }

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
              <span>{numberHp}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroHP}px` }}
                  className={`${styles.progessStatsGreenHP}`}
                ></div>
              </div>
            </div>
            <div>
              <p>Attack</p>
              <span>{numberAtk}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroAtk}px` }}
                  className={`${styles.progessStatsGreenAtk}`}
                ></div>
              </div>
            </div>
            <div>
              <p>Defense</p>
              <span>{numberDf}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroDf}px` }}
                  className={`${styles.progessStatsGreenDf}`}
                ></div>
              </div>
            </div>
            <div>
              <p>Sp. Atk</p>
              <span>{numberSpAtk}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroSpAtk}px` }}
                  className={`${styles.progessStatsGreenSpAtk}`}
                ></div>
              </div>
            </div>
            <div>
              <p>Sp. Def</p>
              <span>{numberSpDef}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroSpDef}px` }}
                  className={`${styles.progessStatsGreenSpDef}`}
                ></div>
              </div>
            </div>
            <div>
              <p>Speed</p>
              <span>{numberSpeed}</span>
              <div className={`${styles.progressStats}`}>
                <div
                  style={{ width: `${numeroSpeed}px` }}
                  className={`${styles.progessStatsGreenSpeed}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pokemonDetails;
