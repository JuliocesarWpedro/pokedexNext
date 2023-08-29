import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p>Direitos de imagem para Nintendo & The Pokémon Company</p>
          <p>Dados pegos da API - pokeapi.co</p>
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
      </div>
    </footer>
  );
};

export default Footer;
