import BackgroundOrange from '@/Components/BackgroundOrange/BackgroundOrange';
import Footer from '@/Components/Footer/Footer';
import PokemonHome from '@/Components/PokemonHome/PokemonHome';
import PokemonSelect from '@/Components/PokemonSelect/PokemonSelect';
import React from 'react';

const page = () => {
  return (
    <>
      <BackgroundOrange>
        <PokemonHome />
      </BackgroundOrange>
      <PokemonSelect />
      <Footer />
    </>
  );
};

export default page;
