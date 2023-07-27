import React from 'react';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const header = () => {
  return (
    <header className="mainContainer">
      <Link href="/">
        <Image
          src="/images/logo-pokemon.png"
          width="153"
          height="56"
          alt="Imagem logo"
        />
      </Link>
    </header>
  );
};

export default header