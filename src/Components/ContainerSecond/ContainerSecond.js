import React from 'react';
import Image from 'next/image';
import styles from '../ContainerSecond/ContainerSecond.module.css';

const ContainerSecond = () => {
  return (
    <div className={`${styles.containerSecond}`}>
      <Image src="/images/Rectangle(2).png" width="1" height="124" alt="Line" />
      <Image
        src="/images/pokeball-diviser.png"
        width="56"
        height="56"
        alt="Pokemon ball"
      />
      <Image src="/images/Rectangle(2).png" width="1" height="124" alt="Line" />
    </div>
  );
};

export default ContainerSecond;
