import React from 'react';
import styles from '../containerThree/containerThree.module.css';

const ContainerThree = () => {
  const numberHp = 78;
  const numberAtk = 84;
  const numberDf = 78;
  const numberSpAtk = 109;
  const numberSpDef = 85;
  const numberSpeed = 100;

  return (
    <div className={`${styles.containerThree}`}>
      <h2>Stats</h2>
      <div className={`${styles.stats}`}>
        <div>
          <p>HP</p>
          <span>{numberHp}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{
                width: numberHp <= 100 ? `${numberHp}%` : '100%',
              }}
              className={`${styles.progessStatsGreenHP}`}
            ></div>
          </div>
        </div>
        <div>
          <p>Attack</p>
          <span>{numberAtk}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{ width: numberAtk <= 100 ? `${numberAtk}%` : '100%' }}
              className={`${styles.progessStatsGreenAtk}`}
            ></div>
          </div>
        </div>
        <div>
          <p>Defense</p>
          <span>{numberDf}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{
                width: numberDf <= 100 ? `${numberDf}%` : '100%',
              }}
              className={`${styles.progessStatsGreenDf}`}
            ></div>
          </div>
        </div>
        <div>
          <p>Sp. Atk</p>
          <span>{numberSpAtk}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{
                width: numberSpAtk <= 100 ? `${numberSpAtk}%` : '100%',
              }}
              className={`${styles.progessStatsGreenSpAtk}`}
            ></div>
          </div>
        </div>
        <div>
          <p>Sp. Def</p>
          <span>{numberSpDef}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{
                width: numberSpDef <= 100 ? `${numberSpDef}%` : '100%',
              }}
              className={`${styles.progessStatsGreenSpDef}`}
            ></div>
          </div>
        </div>
        <div>
          <p>Speed</p>
          <span>{numberSpeed}</span>
          <div className={`${styles.progressStats}`}>
            <div
              style={{
                width: numberSpeed <= 100 ? `${numberSpeed}%` : '100%',
              }}
              className={`${styles.progessStatsGreenSpeed}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerThree;
