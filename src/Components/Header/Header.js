import React from 'react';
import styles from '../Header/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const header = () => {
  return (
    <header className={`${styles.header} mainContainer`}>
      <div className={`${styles.logo}`}>
        <Link className={`${styles.logoLink}`} href="/">
          <Image
            src="/images/logo-pokemon.png"
            width="153"
            height="56"
            alt="Imagem logo"
          />
        </Link>
      </div>
      <nav className={`${styles.navbar}`}>
        <ul>
          <li>
            <Link href="https://br.linkedin.com/">
              <Image
                src="/images/logo-linkedin.png"
                width="32"
                height="32"
                alt="Imagem logo"
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/">
              <Image
                src="/images/github.png"
                width="32"
                height="32"
                alt="Imagem logo"
              />
            </Link>
          </li>
          <li>
            <Link href="https://web.telegram.org/">
              <Image
                src="/images/telegram.png"
                width="32"
                height="32"
                alt="Imagem logo"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
