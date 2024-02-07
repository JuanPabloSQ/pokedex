import { useState } from 'react';

const FetchPokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null); 
    } catch (error) {
      console.error(error);
      setPokemonData(null);
      setError('Nombre de Pokemon incorrecto');
    }
  };

  return { pokemonData, error, handleSearch };
};

export default FetchPokemon;
