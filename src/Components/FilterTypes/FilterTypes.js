import React from 'react';
import styles from './FilterTypes.module.css';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Image from 'next/image';

const FilterTypes = ({ setIsFilterPokemon, setIsHaveFilter }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [isFilter, setIsFilter] = React.useState(false);
  const [optionsFilter, setOptionsFilter] = React.useState([]);
  const [maxFilterExcedido, setMaxFilterExcedido] = React.useState(false);
  const [renderPokemonsFilter, SetRenderPokemonsFilter] = React.useState([]);

  React.useEffect(() => {
    if (selectedOptions.length === 0) {
      setIsHaveFilter(false);
      setOptionsFilter([]);
      setMaxFilterExcedido(false);
      setIsFilter(false);
    } else if (selectedOptions.length > 0 && selectedOptions.length < 3) {
      setIsFilter(true);
      setMaxFilterExcedido(false);
      setOptionsFilter(
        selectedOptions.map((item) => {
          return item.value;
        }),
      );
    } else if (selectedOptions.length > 2) {
      setIsFilter(false);
      setMaxFilterExcedido(true);
    }
  }, [selectedOptions, setIsHaveFilter]);

  React.useEffect(() => {
    if (renderPokemonsFilter) {
      setIsFilterPokemon(renderPokemonsFilter);
    }
  }, [renderPokemonsFilter, setIsFilterPokemon]);

  const animetedComponents = makeAnimated();

  const types = {
    fire: {
      src: '/images/iconesTypes/fire.svg',
      colorBackground: '#FF9900',
      text: 'Fire',
    },
    flying: {
      src: '/images/iconesTypes/flying.svg',
      colorBackground: '#89BDFF',
      text: 'Flying',
    },
    bug: {
      src: '/images/iconesTypes/bug.svg',
      colorBackground: '#7BCF00',
      text: 'Bug',
    },
    dark: {
      src: '/images/iconesTypes/dark.svg',
      colorBackground: '#5A566A',
      text: 'Dark',
    },
    dragon: {
      src: '/images/iconesTypes/dragon.svg',
      colorBackground: '#0076FF',
      text: 'Dragon',
    },
    electric: {
      src: '/images/iconesTypes/electric.svg',
      colorBackground: '#FFDE00',
      text: 'Electric',
    },
    grass: {
      src: '/images/iconesTypes/grass.svg',
      colorBackground: '#1CD80E',
      text: 'Grass',
    },
    poison: {
      src: '/images/iconesTypes/poison.svg',
      colorBackground: '#F149FF',
      text: 'Poison',
    },
    water: {
      src: '/images/iconesTypes/water.svg',
      colorBackground: '#14A8FF',
      text: 'Water',
    },
    normal: {
      src: '/images/iconesTypes/normal.svg',
      colorBackground: 'rgb(202, 202, 202)',
      text: 'Normal',
    },
    ground: {
      src: '/images/iconesTypes/ground.svg',
      text: 'Ground',
      colorBackground: 'rgb(83, 64, 38)',
    },
    rock: {
      src: '/images/iconesTypes/rock.svg',
      text: 'Rock',
      colorBackground: '#a38c21',
    },
    ghost: {
      src: '/images/iconesTypes/ghost.svg',
      text: 'Ghost',
      colorBackground: '#7b62a3',
    },
    psychic: {
      src: '/images/iconesTypes/psychic.svg',
      text: 'Psychic',
      colorBackground: '#f366b9',
    },
    fighting: {
      src: '/images/iconesTypes/fighting.svg',
      text: 'Fighting',
      colorBackground: '#d56723',
    },
    ice: {
      src: '/images/iconesTypes/ice.svg',
      text: 'Ice',
      colorBackground: '#51c4e7',
    },
    steel: {
      src: '/images/iconesTypes/steel.svg',
      text: 'Steel',
      colorBackground: '#9eb7b8',
    },
  };

  const options = [
    {
      value: 'fire',
      label: 'Fire',
      imgSrc: types.fire.src,
    },
    {
      value: 'flying',
      label: 'Flying',
      imgSrc: types.flying.src,
    },
    {
      value: 'bug',
      label: 'Bug',
      imgSrc: types.bug.src,
    },
    {
      value: 'dark',
      label: 'Dark',
      imgSrc: types.fire.src,
    },
    {
      value: 'dragon',
      label: 'Dragon',
      imgSrc: types.dragon.src,
    },
    {
      value: 'electric',
      label: 'Electric',
      imgSrc: types.electric.src,
    },
    {
      value: 'grass',
      label: 'Grass',
      imgSrc: types.grass.src,
    },
    {
      value: 'poison',
      label: 'Poison',
      imgSrc: types.poison.src,
    },
    {
      value: 'water',
      label: 'Water',
      imgSrc: types.water.src,
    },
    {
      value: 'normal',
      label: 'Normal',
      imgSrc: types.normal.src,
    },
    {
      value: 'ground',
      label: 'Ground',
      imgSrc: types.ground.src,
    },
    {
      value: 'rock',
      label: 'Rock',
      imgSrc: types.rock.src,
    },
    {
      value: 'ghost',
      label: 'Ghost',
      imgSrc: types.ghost.src,
    },
    {
      value: 'ground',
      label: 'Ground',
      imgSrc: types.ground.src,
    },
    {
      value: 'psychic',
      label: 'Psychic',
      imgSrc: types.psychic.src,
    },
    {
      value: 'fighting',
      label: 'Fighting',
      imgSrc: types.fighting.src,
    },
    {
      value: 'ice',
      label: 'Ice',
      imgSrc: types.ice.src,
    },
    {
      value: 'steel',
      label: 'Steel',
      imgSrc: types.steel.src,
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: '2px solid #2f5aff',
      outline: 'none',
      boxShadow: 'none',
      borderRadius: '5px 0px 0px 5px',
      '&:hover': {
        backgroundColor: 'transparent',
        outline: 'none',
        boxShadow: 'none',
        padding: 'none !important',
      },
      '&:focus': {
        backgroundColor: 'transparent',
        outline: 'none',
        boxShadow: 'none',
        padding: 'none !important',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: types[state.value]?.colorBackground || 'white', //
      color: 'white',
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: types[state.data.value]?.colorBackground || 'white', //
      color: 'white',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 30,
    }),
  };

  function onClickButton(event) {
    event.preventDefault();
    if (maxFilterExcedido === false && isFilter === true) {
      SetRenderPokemonsFilter(optionsFilter);
    }
  }

  return (
    <div className={styles.filterTypes}>
      <h2>Pesquisar por tipos</h2>
      <div className={styles.swiperContainer}>
        <div>
          <Select
            menuPortalTarget={document.body}
            className={styles.select}
            components={animetedComponents}
            isMulti
            options={options}
            styles={customStyles}
            isClearable={true}
            isSearchable={true}
            isDisabled={false}
            isLoading={false}
            placeholder="Selecione uma opção"
            isRtl={false}
            closeMenuOnSelect={false}
            onChange={(items) => {
              if (items.length > 0) {
                setSelectedOptions(items);
              } else {
                setSelectedOptions([]);
              }
            }}
          />
        </div>
        <button onClick={onClickButton}>
          <Image
            src="/images/Vector.png"
            width="24"
            height="24"
            alt="Image de buscar"
          />
        </button>
        {maxFilterExcedido && (
          <div className={styles.FilterExcedido}>
            <p style={{ color: 'white' }}>
              Selecione 1 ou 2 filtros <span>no máximo</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTypes;
