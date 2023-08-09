import BackgroundOrange from '@/Components/BackgroundOrange/BackgroundOrange';
import PokemonHome from '@/Components/PokemonHome/PokemonHome';
import PokemonSelect from '@/Components/PokemonSelect/PokemonSelect';
import WavesImg from '@/Components/WavesImg/WavesImg';
import React from 'react';

const page = () => {
  return (
    <>
      <BackgroundOrange>
        <PokemonHome />
      </BackgroundOrange>
      <PokemonSelect />
    </>
  );
};

export default page;
