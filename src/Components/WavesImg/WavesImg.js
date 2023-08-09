import React from 'react';
import styles from '../WavesImg/WavesImg.module.css';
import Image from 'next/image';

const WavesImg = () => {
  return (
    <Image src="/images/waves.png" width="1920" height="109" alt="Image waves" />
  );
};

export default WavesImg;
