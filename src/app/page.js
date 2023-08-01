import BackgroundOrange from '@/Components/BackgroundOrange/BackgroundOrange';
import PokemonHome from '@/Components/PokemonHome/PokemonHome';
import React from 'react';

const page = () => {
  return (
    <>
      <BackgroundOrange>
        <PokemonHome/>
      </BackgroundOrange>
    </>
  );
};

export default page;
